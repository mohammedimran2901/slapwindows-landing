import { NextRequest, NextResponse } from "next/server";
import { validateEvent, WebhookVerificationError } from "@polar-sh/sdk/webhooks";
import dbConnect from "@/lib/mongodb";
import License from "@/models/License";
import { generateLicenseKey } from "@/lib/license";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const headers = Object.fromEntries(req.headers.entries());

  try {
    const event = validateEvent(
      body,
      headers,
      process.env.POLAR_WEBHOOK_SECRET!
    );

    // Only handle order.created — nothing else
    if (event.type !== "order.created") {
      console.log(`[Webhook] Ignoring event: ${event.type}`);
      return NextResponse.json({ received: true });
    }

    try {
      await dbConnect();

      const order = event.data;
      const email = order.customer.email ?? "";
      const name = order.customer.name ?? "User";
      const orderId = order.id;

      // Skip if no email
      if (!email) {
        console.log("[Webhook] No email found, skipping");
        return NextResponse.json({ received: true });
      }

      // Duplicate check — One payment per key
      const existing = await License.findOne({ paymentId: orderId });
      if (existing) {
        console.log(`[Webhook] Already processed: ${orderId}`);
        return NextResponse.json({ received: true });
      }

      // License key generate
      const key = generateLicenseKey();

      // Save to MongoDB
      await License.create({
        key,
        email,
        paymentId: orderId,
        activated: false,
        createdAt: new Date(),
      });

      console.log(`[Webhook] License created: ${key} for ${email}`);

      // Email bhejo
      await resend.emails.send({
        from: "SlapWindows <noreply@slapwindows.site>",
        to: email,
        subject: "👋 Your SlapWindows License Key",
        html: `
          <!DOCTYPE html>
          <html>
          <body style="background:#0a0a0a; color:#ffffff; font-family:system-ui,sans-serif; padding:40px; max-width:500px; margin:0 auto;">
            
            <h1 style="font-size:2rem; font-weight:700; margin-bottom:8px;">👋 SlapWindows</h1>
            <p style="color:#888; margin-bottom:32px;">Your laptop is about to get feelings.</p>
            
            <p style="color:#aaa; margin-bottom:12px;">Hey ${name}! Payment successful. Here is your license key:</p>
            
            <div style="background:#1a1a1a; border:1px solid #333; border-radius:10px; padding:20px; text-align:center; margin-bottom:32px;">
              <p style="font-size:11px; color:#666; margin-bottom:8px; letter-spacing:1px;">LICENSE KEY</p>
              <p style="font-size:1.4rem; font-weight:700; letter-spacing:4px; color:#e63535; font-family:monospace;">${key}</p>
            </div>

            <p style="color:#aaa; margin-bottom:16px; font-weight:600;">Steps:</p>
            <ol style="color:#888; line-height:2.2; padding-left:20px;">
              <li>SlapWindows.exe download it</li>
              <li>Open it</li>
              <li>Paste the upper key</li>
              <li>Slap your laptop 🎉</li>
            </ol>

            <a href="${process.env.NEXT_PUBLIC_DOWNLOAD_URL}" 
               style="display:inline-block; background:#e63535; color:#fff; padding:14px 28px; border-radius:8px; text-decoration:none; font-weight:600; margin-top:24px;">
              Download SlapWindows.exe
            </a>

            <hr style="border:none; border-top:1px solid #222; margin:32px 0;">
            <p style="color:#555; font-size:12px;">
              Any problems? Reply to this email.
            </p>

          </body>
          </html>
        `,
      });

      console.log(`[Webhook] Email sent to ${email}`);

    } catch (error) {
      console.error("[Webhook] Error:", error);
      throw error;
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    if (error instanceof WebhookVerificationError) {
      console.error("[Webhook] Invalid signature");
      return NextResponse.json({ error: "Invalid webhook" }, { status: 403 });
    }
    console.error("[Webhook] Error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
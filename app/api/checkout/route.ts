import { NextRequest, NextResponse } from "next/server";
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
});

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    const checkout = await polar.checkouts.create({
      products: [process.env.POLAR_PRODUCT_ID!],  // ← productId → products array
      customerEmail: email,
      customerName: name,
      successUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/success?checkout_id={CHECKOUT_ID}`,
    });

    return NextResponse.json({ checkout_url: checkout.url });
  } catch (error) {
    console.error("[Checkout] Error:", error);
    return NextResponse.json({ error: "Payment failed" }, { status: 500 });
  }
}
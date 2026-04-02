import { NextRequest, NextResponse } from "next/server";
import DodoPayments from "dodopayments";

const dodo = new DodoPayments({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY!,
  environment: "live_mode",
});

export async function POST(req: NextRequest) {
  const { email, name } = await req.json();

  const payment = await dodo.payments.create({
    billing: {
      city: "NA",
      country: "IN",
      state: "NA",
      street: "NA",
      zipcode: "800001",
    },
    customer: { email, name },
    payment_link: true,
    product_cart: [{ product_id: process.env.DODO_PRODUCT_ID!, quantity: 1 }],
    return_url: process.env.DODO_PAYMENTS_RETURN_URL!,
  });

  return NextResponse.json({ checkout_url: (payment as any).payment_link });
}
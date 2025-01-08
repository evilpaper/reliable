import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  console.log("Yay, Stripe got back to us!");

  /**
   * This is Stripes suggested approach to secure our webhook.
   * It add the endpoints signing secret and verify the request so we know it is from Stripe.
   */
  const event = await stripe.webhooks.constructEvent(
    await req.text(),
    req.headers.get("stripe-signature") as string,
    process.env.STRIPE_WEBHOOK_SECRET as string
  );

  console.log("event: ", event);

  return new NextResponse();
}

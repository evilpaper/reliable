import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  console.log("Yay, Stripe got back to us!");

  // const event = await stripe.webhooks.constructEvent(
  //   await req.text(),
  //   req.headers.get("stripe-signature") as string,
  //   process.env.STRIPE_WEBHOOK_SECRET as string
  // );

  // This is for testing only. Production should use a public available url that
  // is registered at Stripe
  const body = await req.text();
  const event = JSON.parse(body);

  console.log("event: ", event);

  return new NextResponse();
}

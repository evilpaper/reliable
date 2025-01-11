import { addPurchase } from "@/db/queries/purchase";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  console.log("Yay, Stripe got back to us!");

  /**
   * This is Stripes suggested approach to secure our webhook.
   * In Stripe each webhook endpoint has a unique signing secret, given by Stripe.
   * Find the secret in the webhooks section of the Dashboard, or,
   * if you’re testing locally with the Stripe CLI, from the CLI output with the command stripe listen.
   * It add the endpoints signing secret and verify the request so we know it is from Stripe.
   * Read more here https://docs.stripe.com/webhooks/quickstart
   */
  const event = await stripe.webhooks.constructEvent(
    await req.text(),
    req.headers.get("stripe-signature") as string,
    process.env.STRIPE_WEBHOOK_SECRET as string
  );

  if (event.type === "charge.succeeded") {
    const charge = event.data.object;
    console.log(charge.metadata);
    const courseId = charge.metadata.courseId;
    const amount = charge.amount;
    const currency = charge.currency;
    const activationId = charge.metadata.activationId;
    const email = charge.billing_details.email;

    console.log("charge: ", charge);

    // addPurchase(purchaserEmail, courseId, amount, currency, activationId);
  }

  return new NextResponse();
}

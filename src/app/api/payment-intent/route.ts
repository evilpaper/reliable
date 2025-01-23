import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
  try {
    const { paymentIntentId, amount, currency, items } = await request.json();

    const paymentIntentData = {
      amount: amount * 100, // Stripe expects amount in öre
      currency,
      metadata: {
        items: JSON.stringify(items),
      },
    };

    let paymentIntent;

    if (paymentIntentId) {
      paymentIntent = await stripe.paymentIntents.update(
        paymentIntentId,
        paymentIntentData
      );
    } else {
      paymentIntent = await stripe.paymentIntents.create(paymentIntentData);
    }

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error("Error creating or updating payment intent: ", error);

    return NextResponse.json(
      { error: "Payment intent operation failed" },
      { status: 500 }
    );
  }
}

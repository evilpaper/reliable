import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { generateActivationId } from "./generate-activation-id";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, courseId, items } = await request.json();

    const activationId = generateActivationId();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe says amount is to small so we multiply by 100
      currency: currency,
      metadata: {
        activationId,
        courseId,
        items: JSON.stringify(items),
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      activationId: paymentIntent.metadata.activationId,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error("Error creating payment intent", error);

    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}

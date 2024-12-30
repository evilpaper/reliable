import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { generateActivationId } from "./generate-activation-id";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
  try {
    const { amount, currency } = await request.json();

    const activationId = generateActivationId();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      metadata: {
        activationId,
      },
    });

    // TODO: Should we store it in databse as pending?
    // TODO: Handle more than one item, each item need a unique activationId

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      activationId: paymentIntent.metadata.activationId,
    });
  } catch (error) {
    console.error("Error creating payment intent", error);

    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}

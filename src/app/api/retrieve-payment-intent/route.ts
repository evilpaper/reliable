import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const paymentIntentId = searchParams.get("paymentIntentId") as string;

  if (!paymentIntentId) {
    return new NextResponse("Payment Intent ID is required", { status: 400 });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    return new NextResponse(JSON.stringify(paymentIntent), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }
}

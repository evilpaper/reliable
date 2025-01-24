import Stripe from "stripe";
import { Success } from "@/components/stripe/success";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const paymentIntentId = searchParams.payment_intent as string;

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

  if (paymentIntent.status !== "succeeded") {
    return <div>Payment failed</div>;
  }

  return <Success activationId={"666"} email={"test@test.com"} />;
}

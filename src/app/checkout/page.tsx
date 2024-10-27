import Stripe from "stripe";
import { Checkout } from "@/components/checkout/checkout";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function Page() {

// TODO: Calculate the total amount of the cart. 
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "USD",
    metadata: { 
      courseId: "1234567890"
    }
  });

  if (paymentIntent.client_secret === null) {
    throw new Error("Stripe failed to create a payment intent");
  }

  return <Checkout clientSecret={paymentIntent.client_secret} />;
}

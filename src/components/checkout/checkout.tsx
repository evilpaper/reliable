"use client";

import { CheckoutCartContent } from "@/components/checkout/checkout-cart-content";
import { YourInformation } from "@/components/checkout/your-information";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/features/cart/use-cart";
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js"

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
)

export function Checkout({ clientSecret }: { clientSecret: string }) {
  const { cartContent } = useCart();
  const isEmpty = cartContent.length === 0;

  if (isEmpty) {
    return (
      <article className="container p-4 h-full flex flex-col gap-6 flex-1">
        <section className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight">Basket</h1>
          <Card>
            <CardContent className="p-4">
              <p>Your cart is empty</p>
            </CardContent>
          </Card>
        </section>
      </article>
    );
  }

  return (
    <article className="container p-4 h-full flex flex-col gap-6 flex-1">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold leading-tight">Basket</h1>
        <CheckoutCartContent />
      </section>
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold leading-tight">Your information</h1>
        <YourInformation />
      </section>
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold leading-tight">Payment</h1>
        <Elements options={{ clientSecret }}  stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </section>
    </article>
  );
}

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  return <PaymentElement />;
}
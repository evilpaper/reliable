"use client";

import { CheckoutCartContent } from "@/components/checkout/checkout-cart-content";
import { YourInformation } from "@/components/checkout/your-information";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "@/features/cart/use-cart";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import { Button } from "@/components/ui/button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export function Checkout() {
  const { cartContent } = useCart();
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    if (cartContent && cartContent[0]) {
      const { price, currency} = cartContent[0];

      fetch("api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: price * 100, currency: currency }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        });
    }
  }, [cartContent]);

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
    <article className="container p-4 h-full flex flex-col gap-6 flex-1 max-w-screen-md">
      <section className="flex flex-col gap-4">
        <CheckoutCartContent />
      </section>
      <section className="flex flex-col gap-4">
        <YourInformation />
      </section>
      <section className="flex flex-col gap-4">
        {clientSecret && (
          <Elements options={{ clientSecret }} stripe={stripePromise}>
            <CheckoutForm price={cartContent[0].price} currency={cartContent[0].currency} />
          </Elements>
        )}
      </section>
    </article>
  );
}

function CheckoutForm({
  price,
  currency,
}: {
  price: number;
  currency: string;
}) {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <form>
      <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Payment</CardTitle>
      </CardHeader>
        <CardContent>
          <PaymentElement />
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            size="lg"
            disabled={stripe === null || elements === null}
          >
            Köp - {price} {currency}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

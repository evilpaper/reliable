"use client";

import { CheckoutCartContent } from "@/components/checkout/checkout-cart-content";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "@/features/cart/use-cart";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export function Checkout() {
  const { cartContent } = useCart();
  const [clientSecret, setClientSecret] = React.useState("");
  const [activationId, setActivationId] = React.useState("");

  // This is only needed to ensure we don't reset the context in development strict mode when the effects run twice.
  const hasLoadedBefore = React.useRef(true);

  React.useEffect(() => {
    if (hasLoadedBefore.current) {
      hasLoadedBefore.current = false;
    } else {
      if (cartContent && cartContent[0]) {
        const { price, currency, courseId } = cartContent[0];

        fetch("api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: price * 100,
            currency: currency,
            courseId,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setActivationId(data.activationId);
            setClientSecret(data.clientSecret);
          });
      }
    }
  }, [cartContent]);

  const isEmpty = cartContent.length === 0;

  const totalAmount = cartContent.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (isEmpty) {
    return (
      <article className="container p-4 h-full flex flex-col gap-6 flex-1">
        <section className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight">Basket</h1>
          <Card>
            <CardContent className="p-4">
              <p>Din varukorg är tom</p>
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
        {clientSecret && (
          <Elements options={{ clientSecret }} stripe={stripePromise}>
            <CheckoutForm
              price={totalAmount}
              currency={cartContent[0].currency}
              activationId={activationId}
            />
          </Elements>
        )}
      </section>
    </article>
  );
}

function CheckoutForm({
  price,
  currency,
  activationId,
}: {
  price: number;
  currency: string;
  activationId: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = React.useState<null | undefined | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/purchase-complete?activation_id=${activationId}`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Betalning</CardTitle>
        </CardHeader>
        <CardContent>
          {message && <p>{message}</p>}
          <PaymentElement />
          <div className="mt-4">
            <LinkAuthenticationElement />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            size="lg"
            disabled={stripe === null || elements === null}
          >
            {isLoading ? "Genomför köp...." : `Köp - ${price} ${currency}`}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

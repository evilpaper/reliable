import { CheckoutCartContent } from "@/components/checkout/checkout-cart-content";

export default function Page() {
  return (
    <article className="container p-4 h-full flex flex-col gap-6">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold leading-tight">Basket</h1>
        <CheckoutCartContent />
      </section>
      <section>
        <h1 className="text-3xl font-bold leading-tight">Payment</h1>
      </section>
    </article>
  );
}

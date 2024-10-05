import { TestimonialCard } from "@/components/testimonial-card";
import { ActionButtons } from "@/components/landing/action-buttons";

export default async function Page() {
  return (
    <section className="container flex flex-col column gap-6">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
        <strong>Get job ready in 30 mins</strong>
      </h1>
      <p className="sm:text-xl md:text-2xl text-center">
        Ensures your staff comply with the requirements of the UK Food Safety
        Act.
      </p>
      <div className="flex justify-center gap-6">
        <ActionButtons />
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
}

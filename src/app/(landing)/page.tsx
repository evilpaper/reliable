// import { getCourseById } from "@/db/queries/course";
// import { CourseCard } from "@/components/courses/course-card";

import TestimonialCard from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";

export default async function Page() {
  // const [{ id, courseId, name, priceInSEK, description }] = await getCourseById(
  //   1
  // );

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
        <Button>Buy course</Button>
        <Button variant="secondary">See the Curriculum</Button>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <TestimonialCard />
        <TestimonialCard />
      </div>
      {/* <CourseCard
        key={id}
        courseId={courseId}
        name={name}
        priceInSEK={priceInSEK}
        description={description}
      /> */}
    </section>
  );
}

import { CourseCard } from "@/components/courses/course-card";

const course = {
  name: "Level 2 Food Hygiene and Safety for Cater",
  description:
    "Ensures your staff comply with the requirements of the UK Food Safety Act.",
  priceInSEK: 299,
};

export default function Page() {
  return (
    <section>
      <CourseCard
        name={course.name}
        description={course.description}
        priceInSEK={course.priceInSEK}
      />
    </section>
  );
}

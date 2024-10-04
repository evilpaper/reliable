import { getCourseById } from "@/db/queries/course";
import { CourseCard } from "@/components/courses/course-card";

export default async function Page() {
  const [{ id, courseId, name, priceInSEK, description }] = await getCourseById(
    1
  );

  return (
    <section className="md:flex gap-6">
      <h1 className="text-5xl">Get work ready</h1>
      <CourseCard
        key={id}
        courseId={courseId}
        name={name}
        priceInSEK={priceInSEK}
        description={description}
      />
    </section>
  );
}

import { CourseCard } from "@/components/courses/course-card";
import { getCourses } from "@/db/queries/course";

export default async function Page() {
  const courses = await getCourses();

  return (
    <section>
      {courses.map(({ name, courseId, priceInSEK, description }) => {
        return (
          <CourseCard
            key={courseId}
            name={name}
            priceInSEK={priceInSEK}
            description={description}
          />
        );
      })}
    </section>
  );
}

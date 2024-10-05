import { CourseCard } from "@/components/courses/course-card";
import { getCourses } from "@/db/queries/course";

export default async function Page() {
  const courses = await getCourses();

  return (
    <>
      {courses.map(({ name, courseId, priceInSEK, description }) => {
        return (
          <CourseCard
            key={courseId}
            courseId={courseId}
            name={name}
            priceInSEK={priceInSEK}
            description={description}
          />
        );
      })}
    </>
  );
}

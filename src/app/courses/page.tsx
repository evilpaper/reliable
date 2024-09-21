import { getCourses } from "@/db/queries/course";

export default async function Page() {
  const courses = await getCourses();

  return (
    <>
      {courses.map((course) => {
        return <p key={course.id}>{course.name}</p>;
      })}
    </>
  );
}

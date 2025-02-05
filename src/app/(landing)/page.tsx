import { getCourseById } from "@/db/queries/course";
import { LandingPage } from "@/features/landing/landing-page";

export default async function Page() {
  const course = await getCourseById("9c0fbf58-a6f4-48f5-b2d8-8b5a4785ad49");

  return <LandingPage course={course} />;
}

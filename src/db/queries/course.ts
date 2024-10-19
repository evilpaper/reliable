import { eq } from "drizzle-orm";
import { db } from "../index";
import { coursesTable } from "@/db/schema";
import { Course, CourseId } from "@/features/cart/cart-provider";

export function getCourses() {
  return db.select().from(coursesTable);
}

export function getCourseById(courseId: CourseId) {
  return db.select().from(coursesTable).where(eq(coursesTable.courseId, courseId)).limit(1).then(results => results[0] || null);;
}

import { eq } from "drizzle-orm";
import { db } from "../index";
import { coursesTable } from "@/db/schema";

export function getCourses() {
  return db.select().from(coursesTable);
}

export function getCourseById(id: number) {
  return db.select().from(coursesTable).where(eq(coursesTable.id, id));
}

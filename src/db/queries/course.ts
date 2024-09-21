import { db } from "../index";
import { coursesTable } from "@/db/schema";

export function getCourses() {
  return db.select().from(coursesTable);
}

import { db } from "../index";
import { purchaseTable } from "../schema";

export async function addPurchase(
  userId: string,
  courseId: string,
  amount: number,
  currency: string,
  activationId: string
) {
  return db
    .insert(purchaseTable)
    .values({
      userId,
      courseId,
      amount,
      currency,
      activationId,
    }) // Adjust the fields as per your schema
    .returning(); // Optionally return the inserted purchase
}

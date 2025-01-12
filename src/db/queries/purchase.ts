import { eq } from "drizzle-orm";
import { db } from "../index";
import { purchaseTable } from "../schema";

export async function addPurchase(
  purchaserEmail: string,
  courseId: string,
  amount: number,
  currency: string,
  activationId: string
) {
  return db
    .insert(purchaseTable)
    .values({
      purchaserEmail,
      courseId,
      amount,
      currency,
      activationId,
    }) // Adjust the fields as per your schema
    .returning(); // Optionally return the inserted purchase
}

export async function getPurchaseByActivationId(activationId: string) {
  return db
    .select()
    .from(purchaseTable)
    .where(eq(purchaseTable.activationId, activationId))
    .limit(1)
    .then((results) => results[0] || null);
}

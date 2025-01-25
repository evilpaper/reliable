import { test, expect } from "@playwright/test";

const MOCK_PAYMENT_DATA = {
  amount: 100, // 100 SEK
  currency: "sek",
  items: [{ id: 1, name: "Test Product", quantity: 1 }],
};

test.describe("Payment Intent API", () => {
  test("should create a new payment intent", async ({ request }) => {
    const response = await request.post("/api/payment-intent", {
      data: MOCK_PAYMENT_DATA,
    });

    const json = await response.json();

    // Verify response status
    expect(response.ok()).toBeTruthy();

    // Verify response structure
    expect(json).toHaveProperty("clientSecret");
    expect(json).toHaveProperty("paymentIntentId");
    expect(typeof json.clientSecret).toBe("string");
    expect(typeof json.paymentIntentId).toBe("string");
  });

  test("should update existing payment intent", async ({ request }) => {
    // First create a payment intent
    const createResponse = await request.post("/api/payment-intent", {
      data: MOCK_PAYMENT_DATA,
    });
    const createJson = await createResponse.json();

    // Update the payment intent with new amount
    const updateResponse = await request.post("/api/payment-intent", {
      data: {
        ...MOCK_PAYMENT_DATA,
        amount: 200, // Update amount to 200 SEK
        paymentIntentId: createJson.paymentIntentId,
      },
    });

    const updateJson = await updateResponse.json();

    // Verify response status
    expect(updateResponse.ok()).toBeTruthy();

    // Verify it returns the same payment intent ID
    expect(updateJson.paymentIntentId).toBe(createJson.paymentIntentId);
    expect(updateJson).toHaveProperty("clientSecret");
  });

  test("should handle errors gracefully", async ({ request }) => {
    const response = await request.post("/api/payment-intent", {
      data: {
        // Invalid data
        amount: "invalid",
        currency: "invalid",
      },
    });

    const json = await response.json();

    expect(response.status()).toBe(500);
    expect(json).toHaveProperty("error");
    expect(json.error).toBe("Payment intent operation failed");
  });
});

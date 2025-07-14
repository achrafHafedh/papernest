import { test, expect } from "@playwright/test";

test.describe("Offers page with filters", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("Français").click();
    await expect(page).toHaveURL("/fr/offers/fr");
  });

  test("filter by provider <fr_001>", async ({ page }) => {
    await page.getByTestId("provider").click();
    await page.getByTestId("option-fr_001").click();
    await expect(page.getByTestId("label-fr_001")).toHaveText(
      "Voltaire Énergie"
    );
    await expect(page.getByTestId("offer-card")).toHaveCount(3);
  });

  test("filter by contract duration <24 mois>", async ({ page }) => {
    await page.getByTestId("contract_duration").click();
    await page.getByTestId("option-24 mois").click();
    await expect(page.getByTestId("label-24 mois")).toHaveText("24 mois");
    await expect(page.getByTestId("offer-card")).toHaveCount(5);
  });

  test("filter by energy type <mixte>", async ({ page }) => {
    await page.getByTestId("energy_type").click();
    await page.getByTestId("option-mixte").click();
    await expect(page.getByTestId("label-mixte")).toHaveText("mixte");
    await expect(page.getByTestId("offer-card")).toHaveCount(6);
  });

  test("filter by price guarantee <fixe>", async ({ page }) => {
    await page.getByTestId("price_guarantee").click();
    await page.getByTestId("option-fixe").click();
    await expect(page.getByTestId("label-fixe")).toHaveText("fixe");
    await expect(page.getByTestId("offer-card")).toHaveCount(9);
  });

  test("filter by direction <asc>", async ({ page }) => {
    await page.getByTestId("sort").click();
    await page.getByTestId("option-asc").click();
    await expect(page.getByTestId("label-asc")).toHaveText("Croissant");
    await expect(page.getByTestId("price").nth(0)).toHaveText("56.8");
    const prices = page.getByTestId("price");
    const count = await prices.count();
    await expect(page.getByTestId("price").nth(count - 1)).toHaveText("84");
  });

  test("filter by provider <label-fr_006> to get no resutls", async ({
    page,
  }) => {
    await page.getByTestId("provider").click();
    await page.getByTestId("option-fr_006").click();
    await expect(page.getByTestId("label-fr_006")).toHaveText("France Solaire");
    await expect(page.getByTestId("offer-card")).toHaveCount(0);
    await expect(page.getByTestId("no-results")).toBeDefined();
  });
});

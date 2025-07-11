import { test, expect } from "@playwright/test";

test("navigate to frensh page when clicking on the link", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByTestId("Français").click();
  await expect(page).toHaveURL("/fr/offers/fr");
});

test("Navigate to the Italian page when clicking on the link", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  await page.getByTestId("Italiano").click();
  await expect(page).toHaveURL("/fr/offers/it");
});

test("Navigate to the spanish page when clicking on the link", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  await page.getByTestId("Español").click();
  await expect(page).toHaveURL("/fr/offers/es");
});

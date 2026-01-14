import { test, expect } from '@playwright/test';

test('@smoke First test', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByText("Bài học 1: Register Page (có đủ các element)").click();
  await page.locator("#username").fill("Khanh");
  await expect(page.locator("#username")).toHaveValue("Khanh");
});

test('Open multiple tab', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  const page2 = await page.context().newPage();
  await page2.goto('https://material.playwrightvn.com/');
  const page3 = await page.context().newPage();
  await page3.goto('https://material.playwrightvn.com/');

  //Quay lai page 2
  await page.bringToFront();
  
});

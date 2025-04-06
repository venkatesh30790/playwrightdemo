// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect title to contain "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // Click the get started link
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expect URL to contain intro
  await expect(page).toHaveURL(/.*intro/);
});


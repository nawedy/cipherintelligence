import { test, expect } from '@playwright/test';

test('Homepage accessibility', async ({ page }) => {
  await page.goto('/');
  const accessibilityScanResults = await page.accessibility.snapshot();
  expect(accessibilityScanResults.violations).toEqual([]);
}); 
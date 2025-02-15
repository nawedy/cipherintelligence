import { test, expect } from '@playwright/test';

test('Admin dashboard access', async ({ page }) => {
  await page.goto('/admin');
  await page.fill('input[name="email"]', 'admin@eriethio.com');
  await page.fill('input[name="password"]', 'securepassword');
  await page.click('button[type="submit"]');
  
  await expect(page.locator('.cms-dashboard')).toBeVisible();
  await expect(page.locator('text=Unauthorized')).not.toBeVisible();
});

test('Content version history', async ({ page }) => {
  await page.goto('/content/123/versions');
  const versionItems = await page.locator('.version-item').count();
  expect(versionItems).toBeGreaterThan(0);
}); 
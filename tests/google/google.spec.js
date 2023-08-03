// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Google', () => {
  test('Searching for Playwright shows title @ci', async ({ page }) => {
    await page.goto('https://google.com/');
    await page.fill('textarea[name="q"]', 'playwright');
    await page.press('textarea[name="q"]', 'Enter');
    await expect(page).toHaveTitle(/playwright/);
  });
});

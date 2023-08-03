// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Parabank @ci', () => {
  test('Login', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="password"]', 'demo');
    await page.click('input[value="Log In"]');

    const pLoggedIn = await page.locator('p.smallText');
    const messageLoggedIn = await pLoggedIn.innerText();
    expect(messageLoggedIn).toContain('John Smith');
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
  });
});

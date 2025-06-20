// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Parabank @ci', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="password"]', 'demo');
    await page.click('input[value="Log In"]');
  })

  test('Open new savings account @ci', async ({ page }) => {
    // Access the open new account page
    await page.click('text=Open New Account');

    // Open the new account
    await page.selectOption('#type', 'SAVINGS');
    await page.selectOption('#fromAccountId', '12345');
    await page.click('input[value="Open New Account"]');
    await expect(page.locator('#newAccountId')).toBeVisible();

    // Saves the accountId for validation
    let createdAccountId = await page.innerText('#newAccountId');

    // Validate the new account
    await page.click('#newAccountId');
    await expect(page.locator('#accountId')).toContainText(createdAccountId);
  });
});


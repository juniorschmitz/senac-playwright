// @ts-check
const { test, expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';

test.describe('Parabank', () => {
  test.only('Register', async ({ page }) => {
    // Load Parabank Page
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    
    // Access Registration Page
    await page.getByRole('link', { name: 'Register' }).click();

    // Fill out Registration Form
    await page.type('#customer\\.firstName', 'test1');
    await page.type('#customer\\.lastName', 'test1');
    await page.type('#customer\\.address\\.street', 'test1');
    await page.type('#customer\\.address\\.city', 'test1');
    await page.type('#customer\\.address\\.state', 'test1');
    await page.type('#customer\\.address\\.zipCode', 'test1');
    await page.type('#customer\\.phoneNumber', 'test1');
    await page.type('#customer\\.ssn', 'test1');
    await page.type('#customer\\.username', faker.person.firstName() + "123");
    let password = faker.internet.password();
    await page.type('#customer\\.password', password);
    await page.type('#repeatedPassword', password);
    await page.click('input[value="Register"]');

    // Verify Registration
    const pRegistered = await page.locator('#rightPanel p');
    const messageRegistered = await pRegistered.innerText();
    expect(messageRegistered).toContain('Your account was created successfully. You are now logged in.');
  });
});

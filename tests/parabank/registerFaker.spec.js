// @ts-check
const { test, expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';

test.describe('Parabank', () => {
  test('Register', async ({ page }) => {
    // Load Parabank Page
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    
    // Access Registration Page
    await page.getByRole('link', { name: 'Register' }).click();

    // Fill out Registration Form
    await page.type('#customer\\.firstName', faker.person.firstName());
    await page.type('#customer\\.lastName', faker.person.lastName());
    await page.type('#customer\\.address\\.street', faker.location.streetAddress());
    await page.type('#customer\\.address\\.city', faker.location.city());
    await page.type('#customer\\.address\\.state', faker.location.state());
    await page.type('#customer\\.address\\.zipCode', faker.location.zipCode());
    await page.type('#customer\\.phoneNumber', faker.phone.number());
    await page.type('#customer\\.ssn', faker.phone.number());
    await page.type('#customer\\.username', faker.internet.userName() + "123");
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

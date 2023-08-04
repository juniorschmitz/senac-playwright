// @ts-check
const { test, expect } = require('@playwright/test');
import { HomePage } from '../../pages/HomePage';

test.describe('Serverest', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test('Login @ci', async ({ page }) => {
   await homePage.load();
   await homePage.login('fulano@qa.com', 'teste');
   await homePage.validateLoggedIn();
  });
});

// @ts-check
const { test, expect } = require('@playwright/test');
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage.js';
import { faker } from '@faker-js/faker';

test.describe('Serverest', () => {
  let homePage;
  let productPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    await homePage.load();
    await homePage.login('fulano@qa.com', 'teste');
    await homePage.validateLoggedIn();
  });

  test('Create Product', async ({ page }) => {
    await homePage.accessProductPage();

    let productName = faker.internet.userName() + "123";
    await productPage.createProduct(productName, '10', 'Descrição do produto teste', '10');
    await productPage.validateProductCreated(productName);
    await page.pause();
  });
});

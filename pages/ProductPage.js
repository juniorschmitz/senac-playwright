import { expect } from '@playwright/test'

export class ProductPage {
  constructor(page) {
    this.page = page;
    this.inputName = page.locator('input[data-testid="nome"]');
    this.inputPrice = page.locator('input[data-testid="preco"]');
    this.inputDescription = page.locator('textarea[data-testid="descricao"]');
    this.inputQuantity = page.locator('input[data-testid="quantity"]');
    this.btnCreate = page.locator('button[data-testid="cadastarProdutos"]');
    this.tableListProducts = page.locator('table');
  }

  async createProduct(name, price, description, quantity) {
    await this.inputName.fill(name);
    await this.inputPrice.fill(price);
    await this.inputDescription.fill(description);
    await this.inputQuantity.fill(quantity);
    await this.btnCreate.click();
  }

  async validateProductCreated(productName) {
    await expect(this.tableListProducts).toContainText(productName);
  }
}
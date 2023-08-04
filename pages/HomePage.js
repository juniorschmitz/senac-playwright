import { expect } from '@playwright/test'

export class HomePage {
  constructor(page) {
    this.page = page;
    this.inputEmail = page.locator('input[name="email"]');
    this.inputPassword = page.locator('input[name="password"]');
    this.btnLogin = page.locator('button[data-testid="entrar"]');
    this.btnLogout = page.locator('button[data-testid="logout"]');
    this.msgLoggedIn = page.locator('p.lead');
    this.linkRegisterProducts = page.locator('a[data-testid="cadastrar-produtos"]');
  }

  async load() {
    await this.page.goto('https://front.serverest.dev/login')
  }

  async login(email, password) {
    await this.inputEmail.fill(email);
    await this.inputPassword.fill(password);
    await this.btnLogin.click();
  }

  async validateLoggedIn() {
    await expect(this.btnLogout).toBeVisible( { timeout: 10000 } );
    await expect(this.msgLoggedIn).toContainText('Este é seu sistema para administrar seu ecommerce.');
  }

  async accessProductPage() {
    await this.linkRegisterProducts.click();
  }
}

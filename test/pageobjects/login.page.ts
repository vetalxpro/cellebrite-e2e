import { Page } from './page';
import { environment } from '../environment';

const { communityUser } = environment;

class LoginPage extends Page {
  get loginForm() {
    return $('.cNewCommunity_LoginForm');
  }

  get inputUsername() {
    return this.loginForm.$$('input')[0];
  }
  get inputPassword() {
    return this.loginForm.$$('input')[1];
  }
  get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login() {
    await this.inputUsername.setValue(communityUser.username);
    await this.inputPassword.setValue(communityUser.password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open('login');
  }
}

export const loginPage = new LoginPage();

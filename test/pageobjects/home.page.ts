import { Page } from './page';

class HomePage extends Page {
  get headLine() {
    return $('.cNewCommunity_HeadLine');
  }

  open() {
    return super.open('');
  }
}

export const homePage = new HomePage();

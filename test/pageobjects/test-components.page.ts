import { Page } from './page';

class TestComponentsPage extends Page {
  open() {
    return super.open('test-components-page');
  }
}

export default new TestComponentsPage();

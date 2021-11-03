import { Page } from './page';
import { FileUploadInput } from './fragments/file-upload-input';
import { Combobox } from './fragments/combobox';

class ProductsAndLicensesPage extends Page {
  get $productAndLicensesTab() {
    return $('.cNewCommunity_ProductAndLicensesTab');
  }
  get $startTrialButton() {
    return this.$productAndLicensesTab.$('button[title="Start a trial"]');
  }

  get $trialModal() {
    return $('c-nc-trial-modal');
  }

  get $trialModalNextButton() {
    return this.$trialModal.$('>>>.footer').$('button=Next');
  }

  get $trialModalSubmitButton() {
    return this.$trialModal.$('>>>.footer').$('button=Register');
  }

  get trialFileUploader() {
    return new FileUploadInput(this.$trialModal.$('>>>c-file-upload-input'));
  }

  get trialSettingsCombobox() {
    return new Combobox(this.$trialModal.$('>>>lightning-combobox'));
  }

  async openTrialModal() {
    await this.$startTrialButton.waitForDisplayed();
    await this.$startTrialButton.click();
    await this.$trialModal.waitForDisplayed();
  }

  async selectActivateTrial() {
    const typeButton = await this.$trialModal.$$('>>>.type-checkbox-btn')[1];
    await typeButton.click({ x: 1, y: 1 });
    await this.$trialModalNextButton.waitForClickable();
    await this.$trialModalNextButton.click();
  }

  open() {
    return super.open('product-and-licenses');
  }
}

export const productsAndLicensesPage = new ProductsAndLicensesPage();

import * as path from 'path';
import { loginPage } from '../pageobjects/login.page';
import { homePage } from '../pageobjects/home.page';
import { productsAndLicensesPage } from '../pageobjects/product-and-licenses.page';

describe('Activate Trial Example', () => {
  fit('should activate trial', async () => {
    await loginPage.open();
    await loginPage.login();
    await homePage.headLine.waitForDisplayed({ timeout: 20000 });
    const page = await productsAndLicensesPage.open();
    await page.openTrialModal();
    await page.selectActivateTrial();

    await page.trialSettingsCombobox.selectOption('m0z0E0000004FUUQA2');

    const filePath = path.resolve(__dirname, '../files/test.c2v');
    await page.trialFileUploader.uploadFile(filePath);

    await page.$trialModalSubmitButton.waitForClickable();
    await page.$trialModalSubmitButton.click();

    // TODO: add some expects to check result
    await browser.pause(20000);
  });
});

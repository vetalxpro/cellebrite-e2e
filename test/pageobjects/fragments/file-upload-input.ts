export class FileUploadInput {
  constructor(private root: ReturnType<WebdriverIO.Browser['$']>) {}

  private get $fileInput() {
    return this.root.$('>>>input[type="file"]');
  }

  async uploadFile(filePath: string) {
    const $root = await this.root;
    await $root.waitForDisplayed();
    const $fileInput = await this.$fileInput;
    await this.unhideFileInput($root, $fileInput);
    await $fileInput.setValue(filePath);
    await this.unhideFileInput($root, $fileInput);
    await this.closeUploadResultModal();
  }

  private async closeUploadResultModal() {
    const okButton = await $('.uiModal.open.active .uiButton.ok span');
    await okButton.scrollIntoView();
    await okButton.waitForClickable();
    await okButton.click();
  }

  private unhideFileInput($root, $input) {
    return browser.execute(
      (rootEl: HTMLElement, inputEl: HTMLElement) => {
        let parentEl = inputEl.parentNode;
        while (parentEl !== rootEl) {
          if (parentEl instanceof ShadowRoot) {
            parentEl = parentEl.host;
          } else {
            let el = parentEl as HTMLElement;
            try {
              const className = el.classList && el.classList.value;

              if (className) {
                if (className.indexOf('slds-hide') >= 0) {
                  el.classList.remove('slds-hide');
                  el.classList.add('e2e-unhide');
                } else if (className.indexOf('e2e-unhide') >= 0) {
                  el.classList.remove('e2e-unhide');
                  el.classList.add('slds-hide');
                }
              }
            } catch (err) {
              console.log(err);
            }

            parentEl = parentEl.parentNode;
          }
        }
      },
      $root,
      $input
    );
  }
}

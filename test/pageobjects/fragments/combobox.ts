export class Combobox {
  constructor(private root: ReturnType<WebdriverIO.Browser['$']>) {}

  private get comboboxTrigger() {
    return this.root.$('>>>.slds-dropdown-trigger_click');
  }

  async selectOption(value: string) {
    await this.comboboxTrigger.click();

    const $option = await this.root.$(
      `>>>lightning-base-combobox-item[data-value="${value}"]`
    );
    await $option.scrollIntoView();
    await $option.click();
  }
}

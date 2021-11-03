/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  async open(path: string) {
    await browser.url(
      `https://partial-cellebrite.cs89.force.com/Community/s/${path}`
    );
    return this;
  }
}

describe('test for Angular app', function() {
  const URL = 'https://www.samsung-forward.ru';

  it('catalog should contain 11 product items', async function() {
    browser.waitForAngularEnabled(false);
    await browser.get(URL);
    let EC = protractor.ExpectedConditions;
    let catalogButton = element(by.css('.page-header a.menu__item:first-child'));
    await browser.wait(EC.elementToBeClickable(catalogButton), 10000);
    await catalogButton.click();
    let lastCatalogItem = element.all(by.css('div.product-card__image')).get(10);
    await browser.wait(EC.visibilityOf(lastCatalogItem), 10000);
    let catalogItems = element.all(by.css('div.product-card__image'));
    expect(catalogItems.count()).toBe(11);
  });
});

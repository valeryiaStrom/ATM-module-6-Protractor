describe('test for Angular app', function() {
  const URL = 'https://www.samsung-forward.ru';

  it('catalog should contain 12 product items', function() {
    browser.manage().timeouts().implicitlyWait(5000)
    browser.get(URL);
    element(by.css('.page-header a.menu__item:first-child')).click();
    let catalogItems = element.all(by.css('div.product-card__image'));
    expect(catalogItems.count()).toBe(12);
  });
});

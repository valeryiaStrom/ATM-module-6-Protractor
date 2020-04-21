describe('test for non-Angular app', function() {
  const URL = 'https://www.indiegogo.com/'
  const searchQuery = 'beauty';

  it('should have at least one beauty topic campaign', function() {
    browser.manage().timeouts().implicitlyWait(5000)
    browser.waitForAngularEnabled(false);
    browser.get(URL);
    element(by.css('.findItFirst-actions button:last-child')).click();
    let EC = protractor.ExpectedConditions;
    let exploreProductsButton = element(by.css('.exploreProjects-button .i-cta-1'));
    browser.wait(EC.visibilityOf(exploreProductsButton), 4000 ,'button was not found');
    exploreProductsButton.click();
    let searchField = element(by.css('.search-desktop .i-search-bar-form input'));
    browser.wait(EC.visibilityOf(searchField), 4000, 'search field was not found');
    searchField.click().sendKeys(searchQuery);
    browser.actions().sendKeys(protractor.Key.ENTER);
    let campaignTitle = element(by.xpath('(//*[contains(@class,"discoverableCard-title")])[1]'));
    browser.wait(EC.visibilityOf(campaignTitle), 4000, 'no campaings was found');
    expect(campaignTitle.isPresent()).toBe(true);
  });
});

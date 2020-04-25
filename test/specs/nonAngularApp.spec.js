describe('test for non-Angular app', function() {
  const URL = 'https://www.indiegogo.com/'
  const searchQuery = 'beauty';

  it('should have at least one beauty topic campaign', async function() {
    browser.manage().timeouts().implicitlyWait(5000)
    browser.waitForAngularEnabled(false);
    await browser.get(URL);
    await element(by.css('.findItFirst-actions button:last-child')).click();
    let EC = protractor.ExpectedConditions;
    let exploreProductsButton = element(by.css('.exploreProjects-button .i-cta-1'));
    await browser.wait(EC.visibilityOf(exploreProductsButton), 4000 ,'button was not found');
    await exploreProductsButton.click();
    let searchField = element(by.css('.search-desktop .i-search-bar-form input'));
    await browser.wait(EC.visibilityOf(searchField), 4000, 'search field was not found');
    await searchField.click().sendKeys(searchQuery);
    await browser.actions().sendKeys(protractor.Key.ENTER);
    let campaignTitle = element(by.xpath('(//*[contains(@class,"discoverableCard-title")])[1]'));
    await browser.wait(EC.visibilityOf(campaignTitle), 4000, 'no campaings was found');
    expect(campaignTitle.isPresent()).toBe(true);
  });
});

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  onPrepare: function() {
    browser.driver.manage().window().maximize();
  },
  specs: [
    'test/specs/angularApp.spec.js',
    'test/specs/nonAngularApp.spec.js'
  ]
}
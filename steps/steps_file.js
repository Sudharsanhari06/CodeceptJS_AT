// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({
    fillForm: function () {
      this.amOnPage('/');
      this.wait(2)
      this.click({ xpath: '//div[@class="category-cards"]/descendant::h5[text()="Forms"]' })
      this.waitForElement({ xpath: '//div[text()="Elements"]/..' }, 5)
      this.click({ xpath: '//div[text()="Elements"]/..' })
      this.wait(3);
      this.click({ xpath: '//span[text()="Text Box"]/..' })
      this.waitForElement({ xpath: '//input[@id="userName"]' }, 4);
      this.fillField({ xpath: '//input[@id="userName"]' }, 'sudharsan');
      this.fillField({ xpath: '//input[@id="userEmail"]' }, 'sudharsan@gmail.com');
      this.fillField({ xpath: '//textarea[@id="currentAddress"]' }, '6/56,sivan kovil street');
      this.fillField({ xpath: '//textarea[@id="permanentAddress"]' }, '6/56,sivan kovil street');
      this.click({ xpath: '//button[@id="submit"]' });
      this.wait(5);
    }
  });
}

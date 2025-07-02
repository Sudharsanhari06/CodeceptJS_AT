// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({
    fillForm: function (name,email,address,currentAddress) {
      this.amOnPage('/');

      this.click({ xpath: '//div[@class="category-cards"]/descendant::h5[text()="Forms"]' })
      this.waitForElement('//div[text()="Elements"]/..', 5)
      this.click({ xpath: '//div[text()="Elements"]/..' })

      this.waitForElement( '//span[text()="Text Box"]/..',3)
      this.click({ xpath: '//span[text()="Text Box"]/..' })
     


      this.waitForElement('//input[@id="userName"]', 4);
      this.fillField({ xpath: '//input[@id="userName"]' }, name);


      this.fillField({ xpath: '//input[@id="userEmail"]' }, email);


      this.fillField({ xpath: '//textarea[@id="currentAddress"]' }, address);
      this.fillField({ xpath: '//textarea[@id="permanentAddress"]' }, currentAddress);
      if (name.length <= 3) {
        throw new Error('Name must be greater than 3 characters');
      }
      if (!email.includes('@gmail.com')) {
        throw new Error('Email must contain "@gmail.com"');
      }
      if ((!address || address.trim() === '') && address.length<7) {
        throw new Error('Address cannot be empty');
      }
      if ((!currentAddress || currentAddress.trim() === '') && currentAddress.length<7) {
        throw new Error('currentAddress cannot be empty');
      }
      
      this.click({ xpath: '//button[@id="submit"]' });

      this.waitForElement('#output', 5);
      this.see('sudharsan', '#name');
      this.see('sudharsan@gmail.com', '#email');
      this.see('6/56 Sivan Kovil Street', '#currentAddress');
      this.see('6/56 Sivan Kovil Street', '#permanentAddress');
    
        this.say(' Form submitted successfully.');
        this.wait(3);
    }
  });
}

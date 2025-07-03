const { I } = inject();



module.exports = function () {
  return actor({
    fillTheForm: function (formDetail) {
      I.amOnPage('/');

      I.click({ xpath: '//div[@class="category-cards"]/descendant::h5[text()="Forms"]' })
      I.waitForElement('//div[text()="Elements"]/..', 5)
      I.click({ xpath: '//div[text()="Elements"]/..' })

      I.waitForElement('//span[text()="Text Box"]/..', 3)
      I.click({ xpath: '//span[text()="Text Box"]/..' })

      I.fillField({ xpath: '//input[@id="userName"]' }, formDetail.name);


      I.fillField({ xpath: '//input[@id="userEmail"]' }, formDetail.email);


      I.fillField({ xpath: '//textarea[@id="currentAddress"]' }, formDetail.currentAddress);
      I.fillField({ xpath: '//textarea[@id="permanentAddress"]' }, formDetail.permanentAddress);


      if (formDetail.name.length <= 3) {
        throw new Error('Name must be greater than 3 characters');
      }
      if (!formDetail.email.includes('@gmail.com')) {
        throw new Error('Email must contain "@gmail.com"');
      }
      if ((!formDetail.currentAddress || formDetail.currentAddress.trim() === '') && formDetail.currentAddress.length < 7) {
        throw new Error('Address cannot be empty');
      }
      if ((!formDetail.permanentAddress || formDetail.permanentAddress.trim() === '') && formDetail.permanentAddress.length < 7) {
        throw new Error('permanentAddress cannot be empty');
      }

      I.click({ xpath: '//button[@id="submit"]' });

      I.waitForElement('#output', 5);
      I.see(`Name:${formDetail.name}`, '#name');
      I.see(`Email:${formDetail.email}`, '#email');
      I.see(`Current Address :${formDetail.currentAddress}`, '#currentAddress');
      I.see(`Permananet Address :${formDetail.permanentAddress}`, '#permanentAddress');
      I.say(' Form submitted successfully.');
      I.wait(3);
    },

  });
}

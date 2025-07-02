function gridCellSelector(email, value) {
  return `//div[@role='gridcell' and text()='${email}']/following-sibling::div[text()='${value}']`;
}


function tableGridSelector(email, value) {
  return `//div[@role='gridcell' and text()='${email}']/preceding-sibling::div[text()='${value}']`
}

module.exports = function () {
  return actor({
    fillTheForm: function (formDetail) {
      this.amOnPage('/');



      this.click({ xpath: '//div[@class="category-cards"]/descendant::h5[text()="Forms"]' })
      this.waitForElement('//div[text()="Elements"]/..', 5)
      this.click({ xpath: '//div[text()="Elements"]/..' })

      this.waitForElement('//span[text()="Text Box"]/..', 3)
      this.click({ xpath: '//span[text()="Text Box"]/..' })



      this.fillField({ xpath: '//input[@id="userName"]' }, formDetail.name);


      this.fillField({ xpath: '//input[@id="userEmail"]' }, formDetail.email);


      this.fillField({ xpath: '//textarea[@id="currentAddress"]' }, formDetail.currentAddress);
      this.fillField({ xpath: '//textarea[@id="permanentAddress"]' }, formDetail.permanentAddress);


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

      this.click({ xpath: '//button[@id="submit"]' });

      this.waitForElement('#output', 5);
      this.see(`Name:${formDetail.name}`, '#name');
      this.see(`Email:${formDetail.email}`, '#email');
      this.see(`Current Address :${formDetail.currentAddress}`, '#currentAddress');
      this.see(`Permananet Address :${formDetail.permanentAddress}`, '#permanentAddress');
      this.say(' Form submitted successfully.');
      this.wait(3);
    },

    fillTheTable: function (tableData) {
      this.amOnPage('/');
      this.click({ xpath: '//div[@class="category-cards"]/descendant::h5[text()="Forms"]' })
      this.waitForElement('//div[text()="Elements"]/..', 5)
      this.click({ xpath: '//div[text()="Elements"]/..' });
      this.waitForElement('//span[text()="Web Tables"]/..', 3)
      this.click('//span[text()="Web Tables"]/..')   //xpath
      this.waitForElement('//button[@id="addNewRecordButton" and text()="Add"]', 3);

      this.click('//button[@id="addNewRecordButton" and text()="Add"]');

      this.waitForElement('//div[@id="registration-form-modal"]/../..', 5)

      this.click('//button[@id="submit" and text()="Submit"]');
      this.seeElement({css:'#firstName:invalid'})
      this.seeElement({css:'#lastName:invalid'})
      this.seeElement({css:'#userEmail:invalid'})
      this.seeElement({css:'#age:invalid'})
      this.seeElement({css:'#salary:invalid'});
      this.seeElement({css:'#department:invalid'});


      this.fillField('//input[@id="firstName"]', tableData.firstname);
      this.fillField('//input[@id="lastName"]', tableData.lastname);
      this.fillField('//input[@id="userEmail"]', tableData.email);
      this.fillField('//input[@id="age"]', tableData.age);
      this.fillField('//input[@id="salary"]', tableData.salary);
      this.fillField('//input[@id="department"]', tableData.department);


      this.click('//button[@id="submit" and text()="Submit"]')
      this.wait(5);
      this.see(tableData.firstname, tableGridSelector(tableData.email, tableData.firstname))
      this.see(tableData.lastname, tableGridSelector(tableData.email, tableData.lastname))
      this.see(tableData.email, `//div[@role='gridcell' and text()='${tableData.email}']`)
      this.see(String(tableData.age), tableGridSelector(tableData.email, tableData.age))
      this.see(String(tableData.salary), gridCellSelector(tableData.email, tableData.salary))
      this.see(tableData.department, gridCellSelector(tableData.email, tableData.department))
      this.say('Successfully insert the data and read that..');
    }
  });
}

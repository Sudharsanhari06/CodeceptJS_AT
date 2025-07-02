const { I } = inject();
function gridCellSelector(email, value) {
  return `//div[@role='gridcell' and text()='${email}']/following-sibling::div[text()='${value}']`;
}


function tableGridSelector(email,value) {
  return `//div[@role='gridcell' and text()='${email}']/preceding-sibling::div[text()='${value}']`
}

function editData(email){
  return `//div[text()='${email}']/following-sibling::div/div/span[contains(@id,"edit-record")]`
}

function deleteData(email){
  return `//div[text()='${email}']/following-sibling::div/div/span[contains(@id,"delete-record")]`
}


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

    fillTheTable: function (tableData) {
      I.amOnPage('/');
      I.click({ xpath: '//div[@class="category-cards"]/descendant::h5[text()="Forms"]' })
      I.waitForElement('//div[text()="Elements"]/..', 5)
      I.click({ xpath: '//div[text()="Elements"]/..' });
      I.waitForElement('//span[text()="Web Tables"]/..', 3)
      I.click('//span[text()="Web Tables"]/..')   //xpath
      I.waitForElement('//button[@id="addNewRecordButton" and text()="Add"]', 3);

      I.click('//button[@id="addNewRecordButton" and text()="Add"]');

      I.waitForElement('//div[@id="registration-form-modal"]/../..', 5)

      I.click('//button[@id="submit" and text()="Submit"]');
      I.seeElement({css:'#firstName:invalid'})
      I.seeElement({css:'#lastName:invalid'})
      I.seeElement({css:'#userEmail:invalid'})
      I.seeElement({css:'#age:invalid'})
      I.seeElement({css:'#salary:invalid'});
      I.seeElement({css:'#department:invalid'});


      I.fillField('//input[@id="firstName"]', tableData.firstname);
      I.fillField('//input[@id="lastName"]', tableData.lastname);
      I.fillField('//input[@id="userEmail"]', tableData.email);
      I.fillField('//input[@id="age"]', tableData.age);
      I.fillField('//input[@id="salary"]', tableData.salary);
      I.fillField('//input[@id="department"]', tableData.department);


      I.click('//button[@id="submit" and text()="Submit"]')
      I.wait(5);
      I.see(tableData.firstname, tableGridSelector(tableData.email, tableData.firstname))
      I.see(tableData.lastname, tableGridSelector(tableData.email, tableData.lastname))
      I.see(tableData.email, `//div[@role='gridcell' and text()='${tableData.email}']`)
      I.see(String(tableData.age), tableGridSelector(tableData.email, tableData.age))
      I.see(String(tableData.salary), gridCellSelector(tableData.email, tableData.salary))
      I.see(tableData.department, gridCellSelector(tableData.email, tableData.department))

      I.say('Successfully insert the data and read that..');
    },

    editTable:function(tableData,updateData,email){
      I.amOnPage('/');
      I.click({ xpath: '//div[@class="category-cards"]/descendant::h5[text()="Forms"]' })
      I.waitForElement('//div[text()="Elements"]/..', 5)
      I.click({ xpath: '//div[text()="Elements"]/..' });
      I.waitForElement('//span[text()="Web Tables"]/..', 3)
      I.click('//span[text()="Web Tables"]/..')  

      I.click(editData(email));
      I.seeInField('//*[@id="firstName"]',tableData.firstname);
      I.seeInField('//*[@id="lastName"]',tableData.lastname);
      I.seeInField('//input[@id="userEmail"]', tableData.email);
      I.seeInField('//input[@id="age"]',String(tableData.age));
      I.seeInField('//input[@id="salary"]',String(tableData.salary));
      I.seeInField('//input[@id="department"]', tableData.department);
      I.say('The data matches');

      I.fillField('//input[@id="firstName"]', updateData.firstname);
      I.fillField('//input[@id="lastName"]', updateData.lastname);
      I.fillField('//input[@id="userEmail"]', updateData.email);
      I.fillField('//input[@id="age"]', updateData.age);
      I.fillField('//input[@id="salary"]', updateData.salary);
      I.fillField('//input[@id="department"]', updateData.department);

      I.click('//button[@id="submit" and text()="Submit"]')
      I.wait(5);
      I.see(updateData.firstname, tableGridSelector(updateData.email, updateData.firstname))
      I.see(updateData.lastname, tableGridSelector(updateData.email, updateData.lastname))
      I.see(updateData.email, `//div[@role='gridcell' and text()='${updateData.email}']`)
      I.see(String(updateData.age), tableGridSelector(updateData.email, updateData.age))
      I.see(String(updateData.salary), gridCellSelector(updateData.email, updateData.salary))
      I.see(updateData.department, gridCellSelector(updateData.email, updateData.department))

    }

,
    deteleTableRow:function(email){
      I.amOnPage('/');
      I.click({ xpath: '//div[@class="category-cards"]/descendant::h5[text()="Forms"]' })
      I.waitForElement('//div[text()="Elements"]/..', 5)
      I.click({ xpath: '//div[text()="Elements"]/..' });
      I.waitForElement('//span[text()="Web Tables"]/..', 3)
      I.click('//span[text()="Web Tables"]/..')  
      I.click(deleteData(email));
      I.wait(3);
    }


  });
}

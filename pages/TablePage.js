const { I } = inject();

module.exports = {
  locators: {
  
    formCard: '//div[@class="category-cards"]/descendant::h5[text()="Forms"]',
    elementsSide: '//div[text()="Elements"]/..',
    webTables: '//span[text()="Web Tables"]/..',

    addButton: '//button[@id="addNewRecordButton" and text()="Add"]',
    modal: '//div[@id="registration-form-modal"]/../..',
    submitBtn: '//button[@id="submit"]',

    firstName: '//input[@id="firstName"]',
    lastName: '//input[@id="lastName"]',
    email: '//input[@id="userEmail"]',
    age: '//input[@id="age"]',
    salary: '//input[@id="salary"]',
    department: '//input[@id="department"]'
  },

  openTables() {
    I.amOnPage('/');
    I.click(this.locators.formCard);
    I.waitForElement(this.locators.elementsSide, 5);
    I.click(this.locators.elementsSide);
    I.waitForElement(this.locators.webTables, 5);
    I.click(this.locators.webTables);
  },

  openForm() {
    I.waitForElement(this.locators.addButton, 5);
    I.click(this.locators.addButton);
    I.waitForElement(this.locators.modal, 5);
  },

  submitEmptyFormValidation() {
    I.click(this.locators.submitBtn);
    I.seeElement('#firstName:invalid');
    I.seeElement('#lastName:invalid');
    I.seeElement('#userEmail:invalid');
    I.seeElement('#age:invalid');
    I.seeElement('#salary:invalid');
    I.seeElement('#department:invalid');
  },

  fillForm(data) {
    I.fillField(this.locators.firstName, data.firstname);
    I.fillField(this.locators.lastName, data.lastname);
    I.fillField(this.locators.email, data.email);
    I.fillField(this.locators.age, data.age);
    I.fillField(this.locators.salary, data.salary);
    I.fillField(this.locators.department, data.department);
  },

  submitForm() {
    I.click(this.locators.submitBtn);
  },

  editData: (email) =>
    `//div[text()='${email}']/following-sibling::div/div/span[contains(@id,"edit-record")]`,

  deleteData: (email) =>
    `//div[text()='${email}']/following-sibling::div/div/span[contains(@id,"delete-record")]`,

  gridCellSelector: (email, value) =>
    `//div[@role='gridcell' and text()='${email}']/following-sibling::div[text()='${value}']`,

  tableGridSelector: (email, value) =>
    `//div[@role='gridcell' and text()='${email}']/preceding-sibling::div[text()='${value}']`,
};


const { I } = inject();
const assert=require('assert')
const validator=require('../utils/validation');

const registrationPage = {

    locators: {
        formModal: '//div[@id="registration-form-modal"]/../..',
        submitBtn: '//button[@id="submit"]',
        firstName: '//input[@id="firstName"]',
        lastName: '//input[@id="lastName"]',
        email: '//input[@id="userEmail"]',
        age: '//input[@id="age"]',
        salary: '//input[@id="salary"]',
        department: '//input[@id="department"]'
    },

    async submitEmptyFormValidation() {
        await I.click(registrationPage.locators.submitBtn);
        await I.seeElement('#firstName:invalid');
        await I.seeElement('#lastName:invalid');
        await I.seeElement('#userEmail:invalid');
        await I.seeElement('#age:invalid');
        await I.seeElement('#salary:invalid');
        await I.seeElement('#department:invalid');
    },

    async fillForm(data) {
        assert(validator.isValidName(data.firstname), ' First Name is invalid');
        assert(validator.isValidEmail(data.email), ' Email is invalid');
        assert(validator.isValidAge(data.age), ' Age must be 0-100');
        assert(validator.isValidSalary(data.salary), ' Salary must be greater 1000');
        assert(validator.isValidDepartment(data.department), ' Department is required');
        await I.fillField(registrationPage.locators.firstName, data.firstname);
        await I.fillField(registrationPage.locators.lastName, data.lastname);
        await I.fillField(registrationPage.locators.email, data.email);
        await I.fillField(registrationPage.locators.age, data.age);
        await I.fillField(registrationPage.locators.salary, data.salary);
        await I.fillField(registrationPage.locators.department, data.department);
    },

    async submitForm() {
        await I.click(registrationPage.locators.submitBtn);
        await I.wait(5);
    },

    async validateTableDataPopupData(tableData) {
        await I.seeInField(registrationPage.locators.firstName, tableData.firstname);
        await I.seeInField(registrationPage.locators.lastName, tableData.lastname);
        await I.seeInField(registrationPage.locators.email, tableData.email);
        await I.seeInField(registrationPage.locators.age, String(tableData.age));
        await I.seeInField(registrationPage.locators.salary, String(tableData.salary));
        await I.seeInField(registrationPage.locators.department, tableData.department);
    }

}
module.exports = registrationPage;
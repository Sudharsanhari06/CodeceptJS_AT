const { I } = inject();

module.exports = {
    locators: {

        formSection: '//div[@class="category-cards"]/descendant::h5[text()="Forms"]',
        elementsSidebar: '//div[text()="Elements"]/..',
        textBoxElement: '//span[text()="Text Box"]/..',
        userName: '//input[@id="userName"]',
        userEmail: '//input[@id="userEmail"]',
        userCurrentAddress: '//textarea[@id="currentAddress"]',
        userPermanentAddress: '//textarea[@id="permanentAddress"]',
        submitElement: '//button[@id="submit" and text()="Submit"]',
        outputElement: '//div[@id="output"]',

    

        formFields: {
            name: '#name',
            email: '#email',
            currentAddress: '#currentAddress',
            permanentAddress: '#permanentAddress'
        }
    },

    goToTextBoxForm() {
        I.amOnPage('/');
        I.click(this.locators.formSection);
        I.waitForElement(this.locators.elementsSidebar, 5);
        I.click(this.locators.elementsSidebar);
        I.waitForElement(this.locators.textBox, 5);
        I.click(this.locators.textBox);
    }
    ,
    fillForm(userData) {
        I.fillField(this.locators.name, userData.name);
        I.fillField(this.locators.email, userData.email);
        I.fillField(this.locators.userCurrentAddress, userData.currentAddress);
        I.fillField(this.locators.userPermanentAddress, userData.permanentAddress);
    },
    submitForm() {
        I.click(this.locators.submitElement)
    },
    validateFormOutput(userData) {
        I.see(`Name:${userData.name}`, this.locators.formFields.name);
        I.see(`Email:${userData.email}`, this.locators.formFields.email);
        I.see(`Current Address :${userData.currentAddress}`, this.locators.formFields.currentAddress);
        I.see(`Permananet Address :${userData.permanentAddress}`, this.locators.formFields.permanentAddress)
    }


}

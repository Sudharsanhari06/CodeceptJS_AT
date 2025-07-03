const { I } = inject();


const applicationLanch = {
    locators: {
        formCard: '//h5[text()="Elements"]/preceding::div[contains(@class,"card")]',
        elementsSide: '//div[text()="Elements"]/..',
        webTables: '//span[text()="Web Tables"]/..',
    }
    ,
    async gotoTablePage() {
    //    await I.waitForElement(applicationLanch.locators.formCard,3);
       await I.click(applicationLanch.locators.formCard);
    //    await I.waitForElement(applicationLanch.locators.elementsSide, 3);
       await I.click(applicationLanch.locators.elementsSide);
    //    await I.waitForElement(applicationLanch.locators.webTables,4)
       await I.click(applicationLanch.locators.webTables);
       await I.say('Web tables page show');
    }

}
module.exports = applicationLanch;
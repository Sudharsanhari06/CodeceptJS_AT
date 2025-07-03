const { I } = inject();


const webTablePage = {
    locators: {
        addButton: '//button[@id="addNewRecordButton" and text()="Add"]',
        tablecontainer:'//h1[text()="Web Tables"]/..'

    },

    async openForm() {

        await I.click(webTablePage.locators.addButton);
    },
    async editForm(email) {
        await I.click(`//div[text()='${email}']/following-sibling::div/div/span[contains(@id,"edit-record")]`)
    },

    async deleteRow() {
        await I.click(`//div[text()='${email}']/following-sibling::div/div/span[contains(@id,"delete-record")]`)
    },

    async validateUpadteForm(updateData) {
        await I.see(updateData.firstname, webTablePage.tableGridSelector(updateData.email, updateData.firstname));
        await I.see(updateData.lastname, webTablePage.tableGridSelector(updateData.email, updateData.lastname));
        await I.see(updateData.email, `//div[@role='gridcell' and text()='${updateData.email}']`);
        await I.see(String(updateData.age), webTablePage.tableGridSelector(updateData.email, updateData.age));
        await I.see(String(updateData.salary), webTablePage.gridCellSelector(updateData.email, updateData.salary));
        await I.see(updateData.department, webTablePage.gridCellSelector(updateData.email, updateData.department));
    }
    ,
    gridCellSelector: (email, value) =>
        `//div[@role='gridcell' and text()='${email}']/following-sibling::div[text()='${value}']`,

    tableGridSelector: (email, value) =>
        `//div[@role='gridcell' and text()='${email}']/preceding-sibling::div[text()='${value}']`,

}

module.exports = webTablePage;
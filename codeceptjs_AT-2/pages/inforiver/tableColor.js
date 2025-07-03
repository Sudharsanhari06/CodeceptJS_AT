const { I } = inject();

const tableColor = {

    // selectTableRow: (region) => `(//span[text()='${region}']/ancestor::div[@role='cell'])[1]`,
      selectTableRow: (region) => `(//span[text()='${region}']/ancestor::div[contains(@id,'table-row-')])[1]`,
    fillColor: '((//div[contains(@class,"editor-colorpicker-icon")])[1]/i)[1]',



    async openInforiver(region) {
        // await I.click(this.selectTableRow(region));
        const rowXPath = this.selectTableRow(region);
        await I.waitForElement(rowXPath, 5);
        await I.scrollTo(rowXPath);
        await I.click(rowXPath);
        await I.click(this.fillColor);
        await I.say('color apply');
        await I.wait(2)
    },

    // async getRowCells(region) {

    //     const fullId = await I.grabAttributeFrom(`//span[text()='${region}']/ancestor::div[contains(@id,'table-row-')]`, 'id');

    //     const rowPrefix = fullId.split('_')[0];

    //     const rowCellsXPath = `//div[contains(@id,'${rowPrefix}')]`;


    //     const count = await I.grabNumberOfVisibleElements(rowCellsXPath);
    //     for (let i = 1; i <= count; i++) {
    //         const cellXPath = `(${rowCellsXPath})[${i}]`;
    //         const bgColor = await I.grabCssPropertyFrom(cellXPath, 'background-color');
    //         console.log(`Cell ${i} → BG Color: ${bgColor}`);
    //     }
    //     await I.say(`Fetched all ${count} cells for row: ${region}`);

    // }

    async verifyRowColor(region) {
        const fullId = await I.grabAttributeFrom(this.selectTableRow(region), 'id');
        const rowPrefix = fullId.split('_')[0]; // => table-row-1
    
        const rowCellsXPath = `//div[contains(@id,'${rowPrefix}')]`;
        const count = await I.grabNumberOfVisibleElements(rowCellsXPath);
        console.log("count",count)
        for (let i = 1; i <= count; i++) {
          const cellXPath = `(${rowCellsXPath})[${i}]`;
          const bgColor = await I.grabCssPropertyFrom(cellXPath, 'background-color');
          I.say(`🔍 Cell ${i} BG: ${bgColor}`);
    

        }
    
        await I.say(` All ${count} cells in row '${region}' have background color:`);
      }

}
module.exports = tableColor;

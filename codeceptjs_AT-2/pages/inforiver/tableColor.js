const { I } = inject();

const tableColor = {

  selectTableRow: (region) => `(//span[text()='${region}']/ancestor::div[contains(@id,'table-row-')])[1]`,
  fillColor: '((//div[contains(@class,"editor-colorpicker-icon")])[1]/i)[2]',


  async openInforiver(region) {
    const rowXPath = this.selectTableRow(region);
    await I.waitForElement(rowXPath, 5);
    await I.click(rowXPath);
    await I.click(this.fillColor);
    
    await I.say('color apply');
    await I.wait(2)
  },


  async verifyRowColor(region) {
    const fullId = await I.grabAttributeFrom(this.selectTableRow(region), 'id');
    const rowId = fullId.split('_')[0];

    console.log("rowId", rowId)

    const rowCellsXPath = `//div[contains(@id,'${rowId}')]`;

    console.log("rowCellsXPath", rowCellsXPath)
    const count = await I.grabNumberOfVisibleElements(rowCellsXPath);
    console.log("count", count)
    for (let i = 1; i <= count; i++) {
      const cellXPath = `(${rowCellsXPath})[${i}]`;
      const bgColor = await I.grabCssPropertyFrom(cellXPath, 'background-color');
      const fillColor = await I.grabCssPropertyFrom(this.fillColor, 'border-bottom');
      const boredrColor = fillColor.split(' ')[2];
      if (boredrColor != bgColor) {
        throw new Error(`Test Failed:the color is not matching..`);

      }
      // console.log("bgColor", bgColor);
      // I.say(`Cell ${i} BG: ${bgColor}`);

    }

    await I.say(` All ${count} cells in row '${region}' have background color:`);
  }


  
}
module.exports = tableColor;

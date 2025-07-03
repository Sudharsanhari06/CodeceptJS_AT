const{I}=inject();

const tableColor={
 
    selectTableRow:(region) => `(//span[text()='${region}']/ancestor::div[@role='cell'])[1]`,
    fillColor: '((//div[contains(@class,"editor-colorpicker-icon")])[1]/i)[1]',

    async openInforiver(region){
        await I.click(this.selectTableRow(region));
        await I.click(this.fillColor);
        await I.say('color apply');
        await I.wait(3)
    }


}
module.exports=tableColor;

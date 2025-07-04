Feature('inforiver change the row color');
const tableColor = require('../pages/inforiver/tableColor');

Scenario('open page', async ({ I }) => {
    let region = 'Europe';
    let colorCode='#666665';


    await I.amOnPage('/');
    await tableColor.openInforiver(region);
    await tableColor.fillColor()
    await tableColor.verifyRowColor(region);



})


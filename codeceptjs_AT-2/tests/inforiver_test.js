Feature('inforiver change the row color');
const tableColor = require('../pages/inforiver/tableColor');

Scenario('open page', async ({ I }) => {
    let region = 'Europe'
    await I.amOnPage('/');
    await tableColor.openInforiver(region);
    await tableColor.verifyRowColor(region,);

})


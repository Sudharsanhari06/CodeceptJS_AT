Feature('inforiver change the row color');
const tableColor = require('../pages/inforiver/tableColor');

Scenario('open page', async ({ I }) => {
    let region = 'Americas'
    await I.amOnPage('/');
    await tableColor.openInforiver(region);

})


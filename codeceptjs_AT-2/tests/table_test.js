Feature('Curd operations in table');
const app = require('../pages/applicationLanch');
const table = require('../pages/webTablePage')
const formpage = require('../pages/registrationPage');

Scenario('add user', async ({ I }) => {
    let tableData = {
        firstname: "sudharsan",
        lastname: "H",
        email: "sudharsan@gmail.com",
        age: 19,
        salary: 20000,
        department: 'Automation Testing'
    }
    await I.amOnPage('/');
    await app.gotoTablePage();
    await table.openForm();
    await formpage.fillForm(tableData);
    await formpage.submitForm();

})


Scenario('Invalid user Data', async ({ I }) => {
    let tableData = {
        firstname: "sudharsan",
        lastname: "H",
        email: "sudharsangmail.com",
        age: 19,
        salary: 900,
        department: 'Automation Testing'
    }
    await I.amOnPage('/');
    await app.gotoTablePage();
    await table.openForm();
    await formpage.fillForm(tableData);
    await formpage.submitForm();

})

// Scenario('edit the form', async ({ I }) => {
//     let tableData = {
//         firstname: "Kierra",
//         lastname: "Gentry",
//         email: "kierra@example.com",
//         age: 29,
//         salary: 2000,
//         department: 'Legal'
//     };
//     let updateData = {
//         firstname: "sudharsan",
//         lastname: "H",
//         email: "sudharsanhari@gmail.com",
//         age: 19,
//         salary: 20000,
//         department: 'AT'
//     };

//     let email = 'kierra@example.com';
//     await I.amOnPage('/');
//     await app.gotoTablePage();
//     await table.editForm(email);
//     await formpage.validateTableDataPopupData(tableData);
//     await formpage.fillForm(updateData);
//     await formpage.submitForm();
//     await table.validateUpadteForm(updateData);
// })

// Scenario('Delete the User Data', async ({ I }) => {
//     let email = 'kierra@example.com';
//     await I.amOnPage('/');
//     await app.gotoTablePage();
//     await table.deleteRow(email);
// });
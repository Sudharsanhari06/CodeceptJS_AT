const { I } = inject();
const tablePage = require('../pages/TablePage');

module.exports = {

  addNewUserData(data) {
    tablePage.openTables();
    tablePage.openForm();
    tablePage.submitEmptyFormValidation();
    tablePage.fillForm(data);
    tablePage.submitForm();

    I.wait(2);
    I.see(data.firstname, tablePage.tableGridSelector(data.email, data.firstname));
    I.see(data.lastname, tablePage.tableGridSelector(data.email, data.lastname));
    I.see(data.email, `//div[@role='gridcell' and text()='${data.email}']`);
    I.see(String(data.age), tablePage.tableGridSelector(data.email, data.age));
    I.see(String(data.salary), tablePage.gridCellSelector(data.email, data.salary));
    I.see(data.department, tablePage.gridCellSelector(data.email, data.department));
  },

  editTable(tableData, updateData, email) {
    tablePage.openTables();

    I.click(tablePage.editData(email));
    I.seeInField(tablePage.locators.firstName, tableData.firstname);
    I.seeInField(tablePage.locators.lastName, tableData.lastname);
    I.seeInField(tablePage.locators.email, tableData.email);
    I.seeInField(tablePage.locators.age, String(tableData.age));
    I.seeInField(tablePage.locators.salary, String(tableData.salary));
    I.seeInField(tablePage.locators.department, tableData.department);

    I.say('The data matches');

    tablePage.fillForm(updateData);
    tablePage.submitForm();

    I.wait(3);
    I.see(updateData.firstname, tablePage.tableGridSelector(updateData.email, updateData.firstname));
    I.see(updateData.lastname, tablePage.tableGridSelector(updateData.email, updateData.lastname));
    I.see(updateData.email, `//div[@role='gridcell' and text()='${updateData.email}']`);
    I.see(String(updateData.age), tablePage.tableGridSelector(updateData.email, updateData.age));
    I.see(String(updateData.salary), tablePage.gridCellSelector(updateData.email, updateData.salary));
    I.see(updateData.department, tablePage.gridCellSelector(updateData.email, updateData.department));
  },

  deteleTableRow(email) {
    tablePage.openTables();
    I.click(tablePage.deleteData(email));
    I.wait(2);
  }
};

Feature('crud operation in Table')



Scenario('Add the User Data',async(I)=>{
    let tableData={
        firstname:"sudharsan",
        lastname:"H",
        email:"sudharsan@gmail.com",
        age:19,
        salary:20000,
        department:'Automation Testing'
    }
    await I.addNewUserData(tableData);
})

// Scenario('Edit the User Data', ({ I }) => {
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

//     I.editTable(tableData, updateData, email);
// });

// Scenario('Delete the Table Row',({I})=>{
//     let email = 'kierra@example.com';
//     I.deteleTableRow(email)
// })




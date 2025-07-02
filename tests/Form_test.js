Feature(' the Forms');

Scenario('open the form element',async({I})=>{
    let formDetail={
        name:"sudharsa",
        email:'sudharsan@gmail.com',
        currentAddress:'6/56 Sivan Kovil Street',
        permanentAddress:'6/56 Sivan Kovil Street'
    }

    // await I.fillTheForm(formDetail);
    let tableData={
        firstname:"sudharsan",
        lastname:"H",
        email:"sudharsan@gmail.com",
        age:19,
        salary:20000,
        department:'Automation Testing'
    }
    await I.fillTheTable(tableData)
    
})

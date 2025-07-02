Feature(' the Forms');

Scenario('open the form element',async({I})=>{
    await I.fillForm("sudharsan",'sudharsan@gmail.com',"6/56 Sivan Kovil Street","6/56 Sivan Kovil Street");
    
})

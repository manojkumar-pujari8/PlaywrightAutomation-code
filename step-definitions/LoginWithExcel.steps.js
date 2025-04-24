const{Given, When , Then} = require("@cucumber/cucumber");
const LoginPage = require("../../page_objects/Login_page");
const ExcelJS = require('exceljs');

Given('I open the Parabank login page', async function () {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("C:/Users/2379904/Documents/loginData.xlsx");
    const worksheet = workbook.getWorksheet('Sheet1');
    const row = worksheet.getRow(2);
    this.username = row.getCell(1).value;
    this.password = row.getCell(2).value;
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goToPage();
  });
When('I login with data from Excel', async function () {
      await this.loginPage.login(this.username,this.password);
      await this.page.waitForTimeout(1000);
      
})
Then('I should see appropriate login result',async function () {
    LoginResult = await this.loginPage.isLoggedIn();
     if(LoginResult){
        console.log("The login is Successful");
     }
     else{
      console.log("This login is unsuccessful");
     }
});

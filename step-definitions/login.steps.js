const{Given, When , Then} = require("@cucumber/cucumber");
const LoginPage = require("../../page_objects/Login_page");
let loginResult = false;

Given('multiple login credentials with {string} and {string}', async function (username, password) {
    this.username = username;
    this.password = password;
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goToPage();
  });
When('I login using the following credentials', async function () {
      await this.loginPage.login(this.username,this.password);
      await this.page.waitForTimeout(1000);
      loginResult = await this.loginPage.isLoggedIn();
})
Then('I should see appropriate login result {string}',async function (status) {
    const expected = status.toLowerCase();
    let actual;
    if(loginResult){
        actual='successful';
    }
    else{
        actual='unsuccessful';
    }
    if(expected!==actual){
        throw new Error(`Expected login to be '${expected}' but got '${actual}'`);
    }
    if(loginResult){
        await this.loginPage.logoutLink.click();
    }
});

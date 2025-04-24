class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[value="Log In"]');
        this.logoutLink = page.locator('a[href="logout.htm"]');
    }


async goToPage(){
    await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
}
async login(username,password){
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}
async isLoggedIn(){
    try{
         await this.logoutLink.waitFor({state:'visible',timeout:3000});
         return true;
    }
    catch(e){
        return false;
    }
}
}

module.exports = LoginPage;

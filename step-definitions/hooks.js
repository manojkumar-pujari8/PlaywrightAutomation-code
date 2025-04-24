const{Before, After, setDefaultTimeout, AfterStep,Status} = require('@cucumber/cucumber');
const{chromium} = require('@playwright/test');
setDefaultTimeout(60*1000);
Before(async function () {
    this.browser = await chromium.launch({headless:false});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});
After(async function () {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
})
AfterStep(async function({result}){
    if(result.status===Status.FAILED){
        await this.page.screenshot({path:'Afterstepscreenshot4.png'});
    }
})

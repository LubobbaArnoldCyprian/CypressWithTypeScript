import {LoginPage} from "../pages/login_quickticket.cy"

const loginPage = new LoginPage()


it.only('login test', function(){

    loginPage.navigate('https://www.quicket.co.ug/account/authentication/login.aspx')
    loginPage.enterEmail('test@test.com')
    loginPage.enterPassword('test')
    loginPage.clickLogin();

   
    // signupPage.enterEmail('');
    // signupPage.retypeEmail('');
    // signupPage.enterPassword('');
    // signupPage.clickRegister();


    
    // loginPage.navigate('https://trytestingthis.netlify.app/index.html')
    // loginPage.enterUsername('test')
    // loginPage.enterPassword('test')
    // loginPage.clickLogin();
})

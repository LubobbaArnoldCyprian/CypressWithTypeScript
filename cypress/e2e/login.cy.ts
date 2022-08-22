import {LoginPage} from "../pages/login_pages.cy"

const loginPage = new LoginPage()

it.only('login test', function(){

    loginPage.navigate('https://www.quicket.co.ug/')
    // loginPage.enterUsername('test')
    // loginPage.enterPassword('test')
    // loginPage.clickLogin();
})



export class LoginPage{

    loginPage_username = '#BodyContent_BodyContent_UserName'
    loginPage_password = '#BodyContent_BodyContent_Password'
    // loginPage_loginButton = '[type="submit"]'


    // signupPage_enterEmail = 'form-control'
    // signupPage_re-enterEmail = ''


    navigate(url:string){
        cy.visit(url)
    }

    enterEmail(email: string){
        cy.get(this.loginPage_username).type(email)

    }

    enterPassword(password: string){
        cy.get(this.loginPage_password).type(password)
    }

    
    clickLogin(){
        // cy.get(this.loginPage_loginButton).click()
        cy.get('a').contains('Log In').click()

    }






    
    
}
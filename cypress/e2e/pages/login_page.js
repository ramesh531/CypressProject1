export class LoginPage{

    username_textfield = 'input[name=username]'
    password_textfield = 'input[name=password]'
    login_button = '.oxd-button'

    enterUsername(username){
        cy.get(this.username_textfield).type(username)
    
    }

    enterPassword(password){
        cy.get(this.password_textfield).type(password)
       
    }

    clickLogin(){

        cy.get(this.login_button).click()
    }

  //  login(){}

    

}
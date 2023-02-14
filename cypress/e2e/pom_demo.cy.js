import {LoginPage}  from "./pages/login_page";

//var loginPage = new LoginPage()
const loginPage = new LoginPage()

beforeEach(function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/')

   })

describe('All Login Tests ',function(){

 /* beforeEach(function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/')

   })
*/
    it('Login Test with Valid Username and password', function () {

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    
        cy.get('.oxd-userdropdown-tab').click()
    
    })
    
    it('Login Test With Invalid UserName', function () {
    
       // cy.visit('https://opensource-demo.orangehrmlive.com/')
    
        loginPage.enterUsername('Admin1')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    
        cy.get('.oxd-userdropdown-tab').click()
    
    })
})

it('Login Test With Invalid Password', function () {
    
    // cy.visit('https://opensource-demo.orangehrmlive.com/')
 
     loginPage.enterUsername('Admin')
     loginPage.enterPassword('admin1234')
     loginPage.clickLogin()
 
     cy.get('.oxd-userdropdown-tab').click()
 
 })

 //using pom fixture
 it.only('using fixture',()=>{

    cy.fixture('orangehrm.json').then((data) =>{

        cy.log(data.username)
        cy.log(data.password)
        loginPage.enterUsername(data.username)
        loginPage.enterUsername(data.password)
        loginPage.clickLogin()
    })

 })

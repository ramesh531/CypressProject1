// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types='Cypress'/>
/// <reference types='Cypress-xpath' />
import 'cypress-file-upload'
require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('getIframe',(iframe)=>{

   return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)


})

//Custom command for clicking on link by using label
Cypress.Commands.add('clickLink',(label)=>{

    cy.get('a').contains(label).click()

})

/*
//Overwrite conatins() method defined by cypress. contains is case sensitive
Cypress.Commands.overwrite('contains',(originalFn, subject, filter, text, options ={})=>{

    //determine if a filter argument is passed

    if(typeof text === 'object'){
        options = text
        text = filter
        filter = undefined
     }
    //this won't check for case
    options.matchCase = false

    return originalFn(subject,filter,text,options)
})*/

//Custom command for Login
Cypress.Commands.add('loginApp',(email,password)=>{

    cy.get('#Email').type(email)
    cy.get('#Password').type(password)
    cy.get('.button-1.login-button').click()
})
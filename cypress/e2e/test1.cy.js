/// <reference types="cypress" />

it('Google Search',()=>{

   // cy.visit('https://google.com')

   cy.visit("https://trytestingthis.netlify.app/")

   cy.get('#fname').type('Ramesh');

   cy.wait(4000)
   //cy.get('#fname2',{timeout:'6000'}).type('Ramesh');
   cy.get('#lname').type('Allamsetti{enter}')

   cy.wait(2000)
   cy.get('[for="male"]')

   // cy.getCookie('CONSENT').should('have.a.property','value','PENDING+437')
   
   
  // cy.clearCookie('CONSENT')
   // cy.get('#L2AGLb > .QS5gu').click

   // cy.get('.gLFyf').type('Automation Step By Step').click

   // cy.contains('Google Search').click
})
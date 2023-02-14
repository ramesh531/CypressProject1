import 'cypress-iframe'

describe('Handling Frames',()=>{

it('Approach1',()=>{

 
    cy.visit('https://the-internet.herokuapp.com/iframe')

    //Get the frame , go to it's document and wrap it
    const iframe=cy.get('#mce_0_ifr')
         .its('0.contentDocument.body')
         .should('be.visible')
         .then(cy.wrap)

    // iframe.clear().type('Ramesh');

     iframe.clear().type('Ramesh{cmd+a}');

     cy.get("[aria-label='Bold']").click();
    

})

it('Approach2 By using custom command',()=>{

    cy.visit('https://the-internet.herokuapp.com/iframe')

    cy.getIframe('#mce_0_ifr').clear().type('Ramesh{cmd+a}');
    
    cy.wait(2000)

    cy.get("[aria-label='Bold']").click();

})



it.only('Approach3 using Cypress Iframe plugin',()=>{

    cy.visit('https://the-internet.herokuapp.com/iframe')

    //below are coming from cypress-iframe login
    cy.frameLoaded('#mce_0_ifr') //Load the frame or switch to frame

    cy.iframe('#mce_0_ifr').clear().type('Welcome Ramesh {cmd+a}')
    
    cy.get("[aria-label='Bold']").click();

})

})
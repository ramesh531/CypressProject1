describe('Navigation between pages',()=>{

   it('Navigation',()=>{

      cy.visit('https://demo.opencart.com')

      cy.title().should('eq','Your Store') //Home page

      //cy.clickLink('Cameras'); //using custom command

      cy.get('li:nth-child(7) a:nth-child(1)').click()

      cy.get("div[id='content']>h2").should('have.text','Cameras')

      cy.wait(2000)

      cy.go('back') // go back
      
      cy.wait(2000)
      cy.title().should('eq','Your Store') //Home page

      cy.go('forward')  // forward page it goes to Camera's page
      
      cy.wait(2000)
      cy.get("div[id='content']>h2").should('have.text','Cameras')

      cy.go(-1) // it will go back
      
      cy.wait(2000)
      cy.title().should('eq','Your Store') //Home page

      cy.go(1)  // move forward 
      
      cy.wait(2000)
      cy.get("div[id='content']>h2").should('have.text','Cameras')

      cy.reload() // It will reload the page
      
      cy.wait(2000)




      

   })

})
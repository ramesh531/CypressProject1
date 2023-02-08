it('Asseertions Demo', ()=>{

cy.visit('https://example.cypress.io')

cy.contains('get').click()

cy.wait(4000)
//cy.get('#query-btn')
   //  .should('contain','Button')
    // .should('have.class','query-btn')
    // .should('be.visible')
   //  .should('be.enabled')

   //implict keywords should  and
     cy.get('#query-btn')
     .should('contain','Button')
     .and('have.class','query-btn')
     .and('be.visible')
     .and('be.enabled')

     //explicit keywords expect and asset

     expect(true).to.be.true
     //expect(name).to.be.equal('cypress')

     assert.equal(4,'4',"Not Equal")
    // assert.strictEqual(4,'4',"Not Equal")
})
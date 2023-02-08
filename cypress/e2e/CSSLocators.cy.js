describe('CSS Locators Test',function(){

it('Css Selector Test1',function(){

    cy.visit("https://opensource-demo.orangehrmlive.com/")
        
    cy.get("[name='username']").type('Admin')  // We can use either ' or "
    cy.get("input[name='password']").type('admin123')  //tag attribute
    cy.get('[type="submit"]').click()

    cy.get('h6.oxd-text').contains('Dashboard')  //Assertion

})

})
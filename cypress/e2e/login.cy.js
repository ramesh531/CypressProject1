it('POM Demo',function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/');


    cy.get('input[name=username]').type('Admin')
    cy.get('input[name=password]').type('admin123')
    cy.get('.oxd-button').click()

    this.timeout(5000)
    

}
)

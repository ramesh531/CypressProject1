describe('Assertions Demo',()=>{

 it('Implicit Assertions',function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
    //Implicit assertions should    and 
    //url method returns current web page  url
    cy.url().should('include','orangehrmlive.com')
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('contain','orange')


    //Another way no need to writer cy.url() multiple times
    cy.url().should('include','orangehrmlive.com')
    .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .should('contain','orange')

    //instead of writing multiple should write with and
    cy.url().should('include','orangehrmlive.com')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain','orange')
    .and('not.contain','yellowhrm')

   //Capture the title using cy.title()
    cy.title().should('include','Orange')
    .and('eq','OrangeHRM')
    .and('contain','HRM')

    //Validation on web elements using implicit
    cy.get('.orangehrm-login-branding').
    should('be.visible') //logo visible
    .and('exist') // logo exists or not

    //Find all links and validate 
    cy.xpath("//a").should('have.length','5')

    //Enter value in the username text field
    cy.get("[name='username']").type('Admin')

    //Validate wheter the value is entered or not
    cy.get("[name='username']").should('have.value','Admin')
})


it.only('Explicit Assertions',function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')

    cy.get("button[type='submit'").click()

    let expName='sakshi wadhwani';

    cy.get('.oxd-userdropdown-name').then((x)=>{

        let actName = x.text()

       // console.log('Actuanl Name : '+actName)

        //BDD Style
        expect(actName).to.equal(expName)
        expect(actName).to.not.equal('abcd')

        //TDD style
        assert.equal(actName,expName)
        assert.notEqual(actName,'xyz')

    })




})

})
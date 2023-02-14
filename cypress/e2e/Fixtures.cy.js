describe('Fixtures',()=>{

 /* it('Fixture example',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com')

    //For fixture extension is optional and in the jquery store the content in a variable
    cy.fixture('orangehrm').then((data)=>{

        cy.get("[name='username']").type(data.username)
        cy.get("[name='password']").type(data.password)
        cy.get("[type='submit']").click()
    
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();
    
        cy.wait(3000)
    
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',data.expected)


    } )
*/
    let userdata;

    //Access through hook for multiple it blocks

    before( ()=>{

        cy.fixture('orangehrm').then((data)=>{

            userdata = data;
        })

    })


    it('Fixture example by using global',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com')
        
            cy.get("[name='username']").type(userdata.username)
            cy.get("[name='password']").type(userdata.password)
            cy.get("[type='submit']").click()
        
            cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();
        
            cy.wait(3000)
        
            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userdata.expected)
    
    
        } )


})


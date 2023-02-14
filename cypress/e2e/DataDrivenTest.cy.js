describe('Data Driven Test', ()=> {

    it('Data Driven Test', ()=> {

        cy.fixture('orangehrm2').then((data)=> {

            cy.visit('https://opensource-demo.orangehrmlive.com/')

            data.forEach((userdata)=> {

                cy.get("[name='username']").type(userdata.username)
                cy.get("[name='password']").type(userdata.password)
                cy.get("[type='submit']").click()

                if (userdata.username == 'Admin' && userdata.password == 'admin123') {

                    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();
                    cy.wait(3000)
                    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', userdata.expected)

                    //Do logout 

                    // cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click()
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.xpath("//a[normalize-space()='Logout']").click();

                }

                else {
                    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', userdata.expected)
                }

            })


        })

    })

})
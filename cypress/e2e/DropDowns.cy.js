describe('Handle Drop Down',function(){

    it.skip('Drop Down With Select',function(){

        cy.visit('https://trytestingthis.netlify.app/')

        //Select the option from drop down and validate it's selected or not
        cy.get('#option').select('Option 1').should('have.value','option 1')


    })

    it.skip('Drop Down Without Select',function(){

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        //Select the option from drop down and validate it's selected or not
        cy.get('#select2-billing_country-container').click();

        cy.get('.select2-search__field').type('Italy').type('{enter}')

        //It's not a dropdown so we are using have.text instead of have.value
        cy.get('#select2-billing_country-container').should('have.text','Italy')

    })

    it.skip('Auto Suggest Dropdown',()=>{

        cy.visit('http://wikipedia.org')

        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestion-title').contains('Delhi University').click()

    })


    it('Dynamic Dropdown',()=>{

        cy.visit('http://google.com')

        cy.get('#L2AGLb > .QS5gu').click()

        cy.get("[name='q']").type('Cypress automation')

        cy.get('div.wM6W7d>span').should('have.length',11)

        cy.wait(3000)

        cy.get('div.wM6W7d>span').each( ($ele,index,$list) =>{

            if($ele.text()=='cypress automation tutorial')
                
               {
                  cy.wrap($ele).click()
               }
        } )

        cy.wait(1000)
        cy.get("[name='q']").should('have.value','cypress automation tutorial')     



        


       // cy.get('.suggestion-title').contains('Delhi University').click()

    })


})
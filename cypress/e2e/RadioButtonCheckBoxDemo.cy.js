describe('Radio and checkbox demo',function(){

    it('Radio Button',function(){


        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get("#male").should('be.visible')
        cy.get("#male").should('not.be.checked')
        
        cy.get("#male").first().check()
        cy.get("#male").should('be.checked')

        cy.get("#female").first().check()
        cy.get("#male").should('not.be.checked')

    })

    it.only('Checking Check boxes',function(){


        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
      
        //Visibility of the checkbox element
        cy.get('#monday').should('be.visible')

        //Selecting single checkbox
        cy.get('#monday').check().should('be.checked')

        //Un Select the checkbox
        cy.get('#monday').uncheck().should('not.be.checked');

        //Selecting all the checkboxes . Find the locator tha shows all checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');
        

        //Unselect all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');
       

        //Select First check box and validate
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

        //Select Last check box 
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

    })


})
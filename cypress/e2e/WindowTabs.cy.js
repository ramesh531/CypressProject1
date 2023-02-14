describe('Handling Window Tabs', () => {

    it('Handle Window Tab', () => {

        //Parent window
        cy.visit('https://the-internet.herokuapp.com/windows')

        //Remove the target attribute so that window open in the same browser
        cy.get(".example >a").invoke('removeAttr', 'target').click()

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(4000)

        //To go back to previous window or tab
        cy.go('back')

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows')


    })


    it('Handling window in 2nd approach', () => {

        //Parent window
        cy.visit('https://the-internet.herokuapp.com/windows')

        //Get the href attribute using Jquery function
        cy.get(".example >a").then((e) => {

            //Storing the href value in a variable url
            let url = e.prop('href')

            cy.visit(url);
        })

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(4000)

        //To go back to previous window or tab
        cy.go('back')

    })

})
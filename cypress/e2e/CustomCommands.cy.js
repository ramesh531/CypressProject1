describe('Custom Commands Suite',()=>{

    it('handling link',()=>{

        cy.visit('https://demo.nopcommerce.com/')


        //Using direct approach
       // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
       // cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')

       //By using custom commands mentioned in commands.js file
       cy.clickLink("Apple MacBook Pro 13-inch")
       cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')

    })


    it('Overwriting existing commands ',()=>{

        cy.visit('https://demo.nopcommerce.com/')

        cy.clickLink("APPLE MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')

    })


    it.only('Login commands ',()=>{

        cy.visit('https://demo.nopcommerce.com/')

        cy.clickLink('Log in') //custom command


        cy.loginApp('testing"gmail.com','test123') //custom login command

    

    })

})
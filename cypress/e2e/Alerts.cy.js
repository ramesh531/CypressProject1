describe('Alerts',()=>{


    it('Simple JS Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //Cypress automatically close the alert window
        cy.get("button[onclick='jsAlert()']").click()
    
        //To trigger event

        cy.on('window:alert',(t)=>{

            expect(t).to.contains('I am a JS Alert')
        })

        cy.get('#result').should('have.text','You successfully clicked an alert')
    
    })

    it('Confirm JS Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //Cypress automatically close the alert window by clicking OK button
        cy.xpath("//button[@onclick='jsConfirm()']").click()
    
        //To trigger event

        cy.on('window:confirm',(t)=>{

            expect(t).to.contains('I am a JS Confirm')
        })

        cy.get('#result').should('have.text','You clicked: Ok')
    
    })

    it('Confirm JS Alert by clicking Cancel',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //Cypress automatically close the alert window by clicking OK button
        cy.xpath("//button[@onclick='jsConfirm()']").click()
    
        //To trigger event

        cy.on('window:confirm',(t)=>{

            expect(t).to.contains('I am a JS Confirm')
        })

        //Cypress will close alert window using Cancel
        cy.on('window:confirm',()=>false)

        cy.get('#result').should('have.text','You clicked: Cancel')
    
    })

    it('JS Prompt Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) =>{

            cy.stub(win,'prompt').returns('hello')
        })


        cy.get("button[onclick='jsPrompt()']").click()

        cy.get('#result').should('have.text','You entered: hello')
    })


    it.only('Authenticated Alert',()=>{

        // cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth : 
        //                                                             {username: "admin",password : "admin"
        //                                                              }
        //                                                           })

        // cy.get("div[class='example'] p").should('have.contain','Congratulations')


        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
       cy.get("div[class='example'] p").should('have.contain','Congratulations')

       
    })

})
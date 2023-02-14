import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
describe('Mouse Operations',()=>{


    it('Mouse Hover',()=>{

        cy.visit('https://demo.opencart.com/')

        cy.xpath("//a[normalize-space()='Mac (1)']").should('not.be.visible')

        //To trigger mouse over event
        cy.xpath("(//a[contains(text(),'Desktops')])[1]").trigger('mouseover').click()

        cy.xpath("//a[normalize-space()='Mac (1)']").should('be.visible')
    })

    it('Right Click',()=>{

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        //Right click using contextmenu
        /*
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu').click()

        cy.get('.context-menu-icon-copy > span').should('be.visible')
        */

        //Approach2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-icon-copy > span').should('be.visible')


    })

    it('Double Click',()=>{

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')

        cy.wait(2000)
        cy.get('#accept-choices').click()

        cy.wait(2000)

        //Switch to the frame using frame plugin
        cy.frameLoaded('#iframeResult') //Load the frame

        //Approach1 using trigger method
       // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        //cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')


        //Apporach2 using dblClick method
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')

    })

    it('DragDrop',()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

        //using the cypress drag drop plugin
        //cy.get('#box6').drag('#box106')
        cy.get('#box6').drag('#box106',{force:true})

    })

    it.only('Scroll Page',()=>{

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        //cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView()

        //It will scroll with 2 seconds
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000})

        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible')

        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration:2000})

        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should('be.visible')

        cy.get('#footer').scrollIntoView();




    })

})
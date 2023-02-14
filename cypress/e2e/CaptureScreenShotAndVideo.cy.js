describe('Capture SS',()=>{

    //cypress by default capture screenshot if the test fails when it runs in the CI or from cypress app
 it('Capture SS and Video',()=>{

     cy.visit('https://demo.opencart.com')

     
     cy.screenshot('homepage') //capture screenshot with name as homepage

     cy.wait(2000)

     cy.get("img[title='Your Store']").screenshot('logo')
     

     //Automaticall capture screenshot & Video on failure - only when you execute through CLI using npx cypress run -s filename

     cy.get("li:nth-child(7) a:nth-child(1)").click()  //Clicking Cameras link

     cy.get("div[id='content'] h2").should('have.text','Tablets') // Negative validation


 })

})
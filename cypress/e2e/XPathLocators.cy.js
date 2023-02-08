describe('Xpath Locators',function(){

   it('xpath locatore test',function(){

    cy.visit("https://automationstepbystep.com")
     

    console.log("Total Images in page : ")
    //Finding all images in the page using xpath and check total 30 images are in the page
    cy.xpath('//img').should('have.length',30) 
    
    //cy.xpath("//a[contains(text(),'Selenium for Beginners')]").click()

    //Clicking the first image in the page
    cy.xpath("(//img)[1]").click();

    //cy.get("//img[@class='alignnone wp-image-3204']").click();

    //cy.get('.alignnone.wp-image-3204').click()


   })

})
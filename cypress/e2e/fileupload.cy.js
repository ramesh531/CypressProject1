/// <reference types="cypress"/>

it('File Upload Demo',function(){

cy.visit('https://trytestingthis.netlify.app/')

//Add command to upload file this is coming from file upload plugin that
// we added . if it's in Fixtures folder directly you can provide the filename
//cy.get('#myfile').attachFile('example.json')

cy.get('#myfile').attachFile('RameshBRPCard.jpeg')

})
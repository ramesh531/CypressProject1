import 'cypress-file-upload'

describe('File Upload',()=>{

it('Single File Upload',()=>{

    cy.visit('https://the-internet.herokuapp.com/upload')

    //The files should be placed in the fixtures folder
    cy.get('#file-upload').attachFile('name.csv')

    cy.get('#file-submit').click();

    cy.wait(2000)

    cy.get("[class='example']>h3").should('have.text','File Uploaded!')



})

it('File Upload - Rename',()=>{

    cy.visit('https://the-internet.herokuapp.com/upload')

    //The files should be placed in the fixtures folder
    cy.get('#file-upload').attachFile({filePath:'name.csv',fileName:'RameshFile.csv'})

    cy.get('#file-submit').click();

    cy.wait(2000)

    cy.get("[class='example']>h3").should('have.text','File Uploaded!')



})

it('File Upload - Using Drag and Drop',()=>{

    cy.visit('https://the-internet.herokuapp.com/upload')

    //The files should be placed in the fixtures folder using drag and drop
    
    cy.get('#drag-drop-upload').attachFile('name.csv',{subjectType:'drag-n-drop'})

    cy.wait(3000)

    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('name.csv')


})

it('Multiple file uploads',()=>{

    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

    cy.get('#filesToUpload').attachFile(['example.json','name.csv'])

    cy.wait(4000)

    cy.get(':nth-child(6) > strong').should('contain.text','Files Yous Selected:')

})

it.only('File Upload - Shadow DOM',()=>{

    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')

    cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('name.csv')

    cy.wait(5000)

    cy.get('.smart-item-name',{includeShadowDom:true}).contains('name.csv')


})

})
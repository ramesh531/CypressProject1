/// <reference_type ="cypress"/>

before(function(){

    //All the content of example.json will be in the variable test_data
    cy.fixture("example.json").as('test_data')

})

it.skip('Read File using fixture',function(){

    cy.fixture('example.json').then((data) =>{
        cy.log(data.name)
        cy.log(data.email)

    })

    cy.log(this.test_data.name)
    cy.log(this.test_data.body)

    cy.fixture("example").its('name').should('eq','Ramesh A')
    

})


it.skip('Reaf File using readFile() method',function(){

  cy.readFile('./cypress/fixtures/example.json').then((data1)=>{

    cy.log(data1.name)

    cy.readFile('./cypress/fixtures/example.json').its('email').should('eq','hello@cypress.io')

  })

})

it('Write File using writeFile() method',function(){


//Here sample.txt file will be created in the root folder 

 cy.writeFile('sample.txt','Hello I am Ramesh \n')

 //cy.writeFile('sample.txt','I am learning cypress') // It overwirtes the content

 cy.writeFile('sample.txt','I am learning cypress',{flag: 'a+'}) // It appends the data to file

 cy.writeFile('./cypress/fixtures/name.csv','Hello I am Ramesh \n')
})
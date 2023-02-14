//4 types of hooks in cypress. These hooks are derived from MOCHA framework
//before  - It will execute before starting all the it blocks. It will execute only once.
//after - It will execute after completion of all the it blocks. It will execute only once.
//beforeEach - It will execute mutiple times before starting of every it block.
//afterEach - It will execute multiple timess after completion of every it block

//Tags in cypress skip and only

//.skip  it will be skipped  it.skip('')

//.only  This it block only will be executed it.only('')


describe('Hooks',()=>{

before(()=>{

    cy.log('****** Launch the application *******')
})

after(()=>{

cy.log('********* Close the application ************')

})


beforeEach(()=>{

    cy.log('****** Log In to application ******')
})

afterEach(()=>{

    cy.log('******* Log Out from application *********')
})

it.only('search',()=>{

    cy.log('******** Searching ************')
})

it('advanced search',()=>{

    cy.log('******** Advance Searching ************')
})

it('Listing Products',()=>{

    cy.log('******** Listing Products ************')
})

})
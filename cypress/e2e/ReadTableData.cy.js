describe('Handle Table Data',()=>{


    beforeEach('Login to Application',()=>{

        cy.visit('https://demo.opencart.com/admin/index.php');

        cy.get("input[name='username']").type('demo')
        cy.get("input[name='password']").type('demo')
        cy.get("button[type='submit']").click()

        cy.get('.btn-close').click()

        //Customers -->Customers

        //Customer main menu
        cy.get('#menu-customer > a').click()

        //Customers sub/child iteam
        cy.get('#menu-customer > ul >li:first-child').click()
    })

    it('Check number of rows and columns',()=>{


            cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length',10)
            cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length',7)
    })

    it('Check cell data for specific row and column',()=>{


        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains('princytrainings4@gmail.com')
     
})


it('Read all rows and columns in table',()=>{


    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
    .each( ($row,index,$rows)=>{

        cy.wrap($row).within( () =>{

            cy.get("td").each(($column,index,$columns) =>{

                cy.log($column.text())

            })

        })
    })
 
})

it.only('Pagination table',()=>{

    //Find total number of pages
    cy.get("div[class='col-sm-6 text-end']").then((e)=>{

    /*  let totalPages
      let myText = e.text(); //Showing 1 to 10 of 10067 (1007 Pages)

      totalPages = myText.substring(myText.indexOf("(")+1,myText.indexOf("Pages")-1)

      cy.log('Total Pages in the table : '+ totalPages)

      */

      let totalPages=3
      for(let p=1;p<=totalPages;p++)
      {

        if(totalPages>1)
        {

            cy.log("Active page is ==="+p)

            cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
            cy.wait(5000)

            cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row,index,$rows)=>{

                cy.wrap($row).within(()=>{

                    cy.get('td:nth-child(3)').then((e)=>{

                        cy.log(e.text())  //EmailId 
                    })
                } )
            })
        }
      }
   } )

   



})

})
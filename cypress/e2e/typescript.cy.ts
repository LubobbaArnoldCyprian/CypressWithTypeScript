///<reference types ="cypress"/>

it('google test', function(){

    cy.visit('https://www.google.com')
    cy.get('.gLFyf')
       .type('google')
       .type('{enter}')
       cy.get('.g > :nth-child(1) > [lang="en"] > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').click()
       
    // // cy.contains('Documentation').type('{enter}')
    // cy.get('.dmenKe > .cIkxbf > .usJj9c > h3 > .l',{timeout:5000}).click()



    
})
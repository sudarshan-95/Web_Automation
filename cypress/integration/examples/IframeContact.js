/// <reference types="Cypress" />

import ContactZysk from '../objectPages/ContactOffice'


describe("Iframe",function(){

  before(function(){
    cy.fixture('example').then(function(data){
      this.data = data;
    })
  })

    const office = new ContactZysk();
     office.ConZysk();

})
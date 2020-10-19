/// <reference types="Cypress" />

import HomePage from '../objectPages/Homepage'
import Services from '../objectPages/ServiceLinks'
import Contact from '../objectPages/ContactPageValidation'


describe("Web Automation for Zysk Website",function(){

  before(function(){
    cy.fixture('example').then(function(data){
      this.data = data;
    })
  })

  const demo = new HomePage();
  demo.Homepage();
  demo.Homepage2();

  const serv = new Services();
  serv.ServiceLinks();

  const Contact1 = new Contact()
  Contact1.validation1();
  Contact1.validation2();


           

          //  it('client websites',function(){
          //    cy.clickOntTabs("Home");
          //    cy.get('a[href="https://github.com/mozilla/bugzilla-dashboard"]').invoke('removeAttr','target')
          //              .click()
          //  })


  }) 



/// <reference types="Cypress" />                            

import Email from '../objectPages/RandomEmailGenerator'

class Contact {
    validation1(){
      return  it("Contact form validation", function () {

                  cy.clickOntTabs("Contact");
                      cy.get('p[class="highlight"]').then(function (text) {
                        const title = text.text();
                        cy.log("I am in Contact page" , title);
                      });

                      cy.get(".col-lg-5 > .header")
                        .then(function (text) {
                          const title = text.text();
                          cy.log(title);
                        });

                  cy.get("#name").type("xyz");
                  cy.get("#email").type("test@test.com");
                  cy.get("#mobile").type("1234567899");
                  cy.get("#message").type("test");
                  cy.get(".btn");

           }); 


    }

     validation2(){
         
      return  it("Contact form validation2 ", function () {
          for(let i=0;i<3;i++){

                  cy.clickOntTabs("Contact");
                      cy.get('p[class="highlight"]').then(function (text) {
                        const title = text.text();
                        cy.log("I am in Contact page" , title);
                      });

                      cy.get(".col-lg-5 > .header")
                        .then(function (text) {
                          const title = text.text();
                          cy.log(title);
                        });
                    
                    
                  cy.get("#name").clear().type("xyz");
                  cy.get("#email").clear().type('demo@123.com')
                  const email = new Email();
                  email.emailValidation()

                  cy.get("#mobile").clear().type("890890890");
                  cy.get("#message").clear().type("Test message");
                  cy.get(".btn");

        } 
      
      }); 


    }
   
}
 

export default Contact;
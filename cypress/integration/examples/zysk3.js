/// <reference types="Cypress" />

describe("Test broken links", function () {

      before(function () {
        cy.fixture("example").then(function (data) {
          this.data = data;
        });
      });

    it("links", function () {
      cy.visit(this.data.LURL);
      cy.get("#url").type(this.data.URL);
      cy.contains('Start Check').click();
      // cy.wait(25000)
      // cy.get('.sidebar-main > .nav > :nth-child(3) > ul > :nth-child(1) > a').click()
      //   cy.screenshot();
      //   cy.wait(1000)
      // cy.get('.link-url').then(function(text){
      //     const links = text.text();
      //     cy.log(links)
      //     cy.screenshot();
      // cy.get('.sidebar-main > .nav > :nth-child(3) > ul > :nth-child(2) > a').click()
      //  cy.screenshot();
      
    })

  });

       
// });

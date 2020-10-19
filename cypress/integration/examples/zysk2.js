

/// <reference types="Cypress" />

describe("Web Automation for Zysk Website",function(){
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  // it('Test the speed of the website',function(){

  //   cy.visit(this.data.GURL)
  //   cy.get(".js-analyze-form-url").type(this.data.URL);
  //   cy.get(".analyze-form-button > button").click();
     
  //     })

  it('Test the speed of the website',function(){

    cy.visit(this.data.PURL)
    cy.get('#urlInput').type(this.data.URL);
    cy.get('.grid__col-sm-4 > .ng-tns-c3-0').click();
    cy.get('.options > :nth-child(1)').click()
    cy.get('.grid__col-sm-2 > .button').click();
    cy.wait(20000)
     
      })  

      it('Take screenshot',function(){
        cy.screenshot();
      })
    })


   

/// <reference types="Cypress" />

describe("Web Automation for Zysk Website",function(){

  before(function(){
    cy.fixture('example').then(function(data){
      this.data = data;
    })
  })


    it("Home page should be displayed", function () {
      
      cy.visit(this.data.URL);
   //   cy.screenshot("Capturing the screenshot after successful login");

      cy.get("#typedtext").then(function (text) {
        const title = text.text();
        cy.log("Home page Loaded succefully", title);
      });

      cy.get(".ml-lg-auto.navbar-nav")
        .find(".nav-link")
        .each(($el, index, $list) => {
          const tabs = $el.text();
          cy.log(tabs);
        });
    });


    it('Check all tabs are checkable or not',function(){
         cy.clickOntTabs('About')

          cy.get('.col-md-8 > .header').then(function (text) {
            const title = text.text();
            cy.log("About page loaded successfully", title);
          });

         cy.clickOntTabs("Services");

         cy.clickOntTabs("Contact");
            
            cy.get('p[class="highlight"]').then(function (text) {
              const title = text.text();
              cy.log("Contact page loaded successfully", title);
            });
       });

          it("Check all Services links working or not", function () {
                cy.get("#navbarDropdownMenuLink").click();
                cy.get(".dropdown-menu.show").each(($el, index, $list) => {
                  const test = $el.text();
                  cy.log(test);
                  cy.wait(10000)
                });

            cy.clickonlink("Websites");

               cy.get('.title').then(function (text) {
                 const title = text.text();
                 cy.log("Websites page loaded successfully", title);
                 cy.wait(10000);
               });

            cy.clickonlink("Custom Applications");

            cy.get(".title").then(function (text) {
              const title = text.text();
              cy.log("Custom Applications page loaded successfully", title);
              cy.wait(10000);
            });

            cy.clickonlink("Front-end Development");

            cy.get(".title").then(function (text) {
              const title = text.text();
              cy.log("Front-end Development page loaded successfully", title);
              cy.wait(10000);
            });

            cy.clickonlink("QA Services");

              cy.get(".title").then(function (text) {
                const title = text.text();
                cy.log("QA Services page loaded successfully", title);
                cy.wait(10000);
              });

            cy.clickonlink("Hybrid Apps Development");

                cy.get(".title").then(function (text) {
                  const title = text.text();
                  cy.log(
                    "Hybride apps Develepment page loaded successfully",
                    title
                  );
                  cy.wait(10000);
                });

            cy.clickonlink("Support & Maintenance");

                cy.get(".title").then(function (text) {
                  const title = text.text();
                  cy.log(
                    "Support and Maintenance page loaded successfully",
                    title
                  );
            
                });
          }); 

           it("Contact Office", function () {

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


  }) 



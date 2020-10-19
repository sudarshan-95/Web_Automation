/// <reference types="Cypress" />

describe("Web Automation for Zysk Website",function(){

  before(function(){
    cy.fixture('example').then(function(data){
      this.data = data;
    })
  })


      it("Home page should be displayed", function () {
      cy.viewport('iphone-6')
      cy.visit(this.data.URL).url().should('include', 'https://zysk.in/');

      cy.get("#typedtext").then(function (text) {
        const title = text.text();
        cy.log("Home page Loaded succefully", title);
         });

      cy.get('.navbar-toggler-icon').click();
      cy.wait(1000)

      cy.get('.nav-link').each(($el, index, $list) => {
          const tabs = $el.text();
          cy.log(tabs);
        });

      cy.clickOntTabs('About').url().should('include', 'https://zysk.in/about-us.html')

          cy.get('.col-md-8 > .header').then(function (text) {
            const title = text.text();
            cy.log("About page loaded successfully", title);
          })
          cy.get('.navbar-toggler-icon').click();
          cy.wait(1000)

          cy.clickOntTabs("Services")
     
          cy.clickOntTabs("Contact").url().should('include', 'https://zysk.in/contact.html')
           cy.get('p[class="highlight"]').then(function (text) {
              const title = text.text();
              cy.log("Contact page loaded successfully", title);
            });

            cy.get('.navbar-toggler-icon').click();
            cy.get("#navbarDropdownMenuLink").click();
               cy.get(".dropdown-menu.show").each(($el, index, $list) => {
                 const test = $el.text();
                 cy.log(test);
                 
               });

               cy.clickonlink("Websites").url().should('include', 'https://zysk.in/services/web-development.html');

               cy.get('.title').then(function (text) {
                 const title = text.text();
                 cy.log("Websites page loaded successfully", title);
                
               });

            cy.clickonlink("Custom Applications").url().should('include', 'https://zysk.in/services/custom-applications.html');

            cy.get(".title").then(function (text) {
              const title = text.text();
              cy.log("Custom Applications page loaded successfully", title);
              
            });

            cy.clickonlink("Front-end Development").url().should('include', 'https://zysk.in/services/ui-development.html');

            cy.get(".title").then(function (text) {
              const title = text.text();
              cy.log("Front-end Development page loaded successfully", title);
              
            });

            cy.clickonlink("QA Services").url().should('include', "#");

              cy.get(".title").then(function (text) {
                const title = text.text();
                cy.log("QA Services page loaded successfully", title);
              
              });

            cy.clickonlink("Hybrid Apps Development").url().should('include', 'https://zysk.in/services/hybrid-mobile-apps.html');

                cy.get(".title").then(function (text) {
                  const title = text.text();
                  cy.log(
                    "Hybride apps Develepment page loaded successfully",
                    title
                  );
        
                });

            cy.clickonlink("Support & Maintenance").url().should('include', "#");
                cy.get(".title").then(function (text) {
                  const title = text.text();
                  cy.log(
                    "Support and Maintenance page loaded successfully",
                    title
                  );
            
                });

                cy.get('.navbar-toggler-icon').click();
                 cy.clickOntTabs("Contact").url().should('include', 'https://zysk.in/contact.html');;
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

                      cy.get('.navbar-toggler-icon').click();
                      cy.clickOntTabs('Home').url().should('include', 'https://zysk.in/index.html');

                       cy.get('a[href="https://github.com/mozilla/bugzilla-dashboard"]')
                       .click()

                        cy.go('back')

                       cy.get('a[href="https://flutura.com/"]').invoke('removeAttr','target')
                       .click()

                      // cy.get('img[alt="Flutura Decision Sciences Private Limited"]').invoke('removeAttr','target')
                      //  .click()

                          cy.go('back')

                          cy.get('a[href="https://gethyphen.com/"]').invoke('removeAttr','target')
                           .click()
                            cy.go('back')             

      })
    
    })
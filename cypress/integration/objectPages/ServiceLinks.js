/// <reference types="Cypress" />


class Services{
   ServiceLinks(){
         return  it("Check all Services links working or not", function () {
                cy.get("#navbarDropdownMenuLink").click();
                cy.get(".dropdown-menu.show").each(($el, index, $list) => {
                  const test = $el.text();
                  cy.log(test);
                });
        
            //                      this.data.service

                

            //     this.data.service.forEach(function(element){
            //         console.log(element)
            //         cy.clickonlink(element);

            //     cy.get('.title').then(function (text) {
            //      const title = text.text();
            //      cy.log(element +"page loaded successfully", title);
            //     });
            //  })

 

                     

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
         }); 
    }
}


export default Services;
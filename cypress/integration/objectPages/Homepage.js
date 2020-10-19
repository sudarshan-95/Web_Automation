/// <reference types="Cypress" />

class HomePage{
    Homepage(){
   return it("Home page should be displayed", function () {
      
      cy.visit(this.data.URL).url().should('include', 'https://zysk.in/');
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

    }

    Homepage2(){

     return it('Check all tabs are checkable or not',function(){
         cy.clickOntTabs('About').url().should('include', 'https://zysk.in/about-us.html')


          cy.get('.col-md-8 > .header').then(function (text) {
            const title = text.text();
            cy.log("About page loaded successfully", title);
          });

         cy.clickOntTabs("Services");

         cy.clickOntTabs("Contact").url().should('include', 'https://zysk.in/contact.html');
            
            cy.get('p[class="highlight"]').then(function (text) {
              const title = text.text();
              cy.log("Contact page loaded successfully", title);
            });
       });

    }
 
    
}

export default HomePage;




/// <reference types="Cypress" />

/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

class ContactZysk{

    ConZysk(){
        it("Contact Zysk",function(){
             cy.visit(this.data.URL).url().should('include', 'https://zysk.in/');
            //  cy.frameLoaded()
            
                cy.get('iframe')
                .then(($iframe) => {
                    const $body = $iframe.contents().find('body')

                    cy.wrap($body)
                    .find('[title="Maximize"]')
                    .click({force: true})

                   
                })

                    cy.get('iframe')
                    .then(($iframe) => {
                        const $body = $iframe.contents().find('body')
                    cy.wrap($body)
                        .find('#formSubmit')
                        .click({force: true}) 
                        cy.wait(10000)
                        cy.screenshot()
                    })

            //      cy.get('iframe')
            //     .then(($iframe) => {
            //         const $body = $iframe.contents().find('body')

            //          cy.wrap($body)
            //         .find('[title="Maximize"]')
            //         .then(function (text) {
            //         const title = text.text();
            //         cy.log("Welcome Text", title);
                        
                
            //     })
            // })
            
                cy.get('iframe')
                .then(($iframe) => {
                    const $body = $iframe.contents().find('body')
                cy.wrap($body)
                    .find('[placeholder="* Name"]')
                    .type('Zysk Technologies',{force: true}) 
                })

                cy.get('iframe')
                .then(($iframe) => {
                    const $body = $iframe.contents().find('body')
                cy.wrap($body)
                    .find('[placeholder="* Email"]')
                    .type('Zysk@tech.com',{force: true}) 
                })

                cy.get('iframe')
                .then(($iframe) => {
                    const $body = $iframe.contents().find('body')
                cy.wrap($body)
                    .find('[placeholder=" Phone"]')
                    .type('9809809809',{force: true}) 
                })

                 cy.get('iframe')
                .then(($iframe) => {
                    const $body = $iframe.contents().find('body')
                cy.wrap($body)
                    .find('.selection-container.checkbox')
                    .click({ multiple: true }) 
                })

                  cy.get('iframe')
                    .then(($iframe) => {
                        const $body = $iframe.contents().find('body')
                    cy.wrap($body)
                        .find('#offline4Field')
                        .type('QA Engineer doing Automation',{force: true}) 
            
                    })
                

                    cy.get('iframe')
                    .then(($iframe) => {
                        const $body = $iframe.contents().find('body')
                    cy.wrap($body)
                        .find('[id="greetingsMainContainer"]').then(function (text) {
                        const title = text.text();
                        cy.log("Welcome Text : ", title);
            
                         });
                    })
                
                        cy.get('iframe')
                        .then(($iframe) => {
                            const $body = $iframe.contents().find('body')
                        cy.wrap($body)
                            .find('#formSubmit')
                        })

                    
         


                // cy.isIFrameReady().then(() => {
                // cy.get('iframe').iframe(() => {
                //     cy
                //     .get('[title="Maximize"]', { timeout: 10 * 1000 })
                //     .click()
                // })
                // })

        

    
     })
       
     }

}

export default ContactZysk;
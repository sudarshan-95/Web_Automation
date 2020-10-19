// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

    Cypress.Commands.add("clickOntTabs", (tabs) => {
      cy.get(".nav-link").each(($el, index, $list) => {
        if ($el.text().includes(tabs)) {
          cy.get(".nav-link").eq(index).click();
        }
      });
    });  

    
    Cypress.Commands.add("clickonlink", (links) => {
      cy.get(".dropdown-item").each(($el, index, $list) => {
        if ($el.text().includes(links)) {
          cy.get(".dropdown-item").eq(index).click({ force: true });
        }
      });
    });



//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe, callback = () => {}) => {
    // For more info on targeting inside iframes refer to this GitHub issue:
    // https://github.com/cypress-io/cypress/issues/136
    cy.log('Getting iframe body')

    return cy
        .wrap($iframe)
        .should(iframe => expect(iframe.contents().find('body')).to.exist)
        .then(iframe => cy.wrap(iframe.contents().find('body')))
        .within({}, callback)
})


Cypress.Commands.add('isIFrameReady', () => {
  return cy.window().then({ timeout: 10 * 1000 }, window => {
    return new Cypress.Promise(resolve => {
      window.addEventListener('message', e => {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data

        if (data.code === 'Ready') {
          resolve()
        }
      })
    })
  })
})

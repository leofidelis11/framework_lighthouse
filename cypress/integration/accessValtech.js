/// <reference types="Cypress" />

describe('Perform lighthouse analysis ', () => {                                 //describe scenario and callback function
    it('Visiting Valtech Page', () => {                                          //callback function
      cy.visit('https://www.valtech.com/')                                       // visit page

      cy.lighthouse(                                                             //call function lighthouse
        {                                                                        //define threshold for each analyses. If the threshold defined is higher than the result, the test fails
          accessibility: 10,                                                     
          "best-practices": 10,
          seo: 10,
        },
        {                                                                       //this object define sets or mobile
          formFactor: "desktop",
          screenEmulation: {
            mobile: false,
            disable: false,
            width: Cypress.config("viewportWidth"),
            height: Cypress.config("viewportHeight"),
            deviceScaleRatio: 1,
        }
        }
      )
      cy.url().should('include', 'https://www.valtech.com/')
    })
  })
  
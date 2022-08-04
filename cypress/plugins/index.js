/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
const { lighthouse, prepareAudit } = require('cypress-audit');
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse')

module.exports = (on, config) => {
    on("before:browser:launch", (browser = {}, launchOptions) => {
      prepareAudit(launchOptions);
    });
  
    on("task", {
      lighthouse: lighthouse(), // calling the function is important
      
    });
  };

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //Grep 'Tags' configs
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    //Mochawesome configs
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true,
    html: true,
    json: true,
  },
  },
});
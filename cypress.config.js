const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = (on) => {

  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../webpack.config'),
    watchOptions: {},
 }
  
  on('file:preprocessor', webpackPreprocessor(options))
}

module.exports = defineConfig({
    projectId: "f2ocw4",
   viewportWidth: 1440,
   viewportHeight: 768,
   chromeWebSecurity: false,
   screenshotOnRunFailure:true,
   screenshotsFolder:'mochawesome-report/assests',
   reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    embeddedScreenshots: true,
    overwrite: false,
    html: false,
    json: true,
  },
 
    env: {
    MAILOSAUR_API_KEY: "Dbd0Fc2qIjfa0SUhhgDJfzx7sn6mwvmo",
      MAILOSAUR_BASE_URL:"https://mailosaur.com/",
      CYPRESS_RECORD_KEY:"abab6f85-2f5f-4795-8d0b-c6d6cfa95bc7"
    },

  e2e: {
    baseUrl: 'https://mochaaccounting.com/', 
     // baseUrl: 'https://www.beckett.com/', 
    excludeSpecPattern: "e2e/**/*.js",
    specPattern: "cypress/TestMochaAccounts/*.js",
    "requestTimeout" : 30000,
    "numTestsKeptInMemory": 0,
    "responseTimeout" : 50000,
    "pageLoadTimeout": 100000,
    //"retries": 1
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    }
  
  
  },

  
});

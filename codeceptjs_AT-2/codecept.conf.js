


/** @type {CodeceptJS.MainConfig} */


exports.config = {
  tests: './tests/**/*_test.js',
  output: './output',
  helpers: {
 
    Playwright: {
      waitForNavigation: "networkidle0",
      waitForTimeout: 50000,
      getPageTimeout: 900000,
      waitForAction: 1000,
      browser: 'chromium',
      url: 'https://inforiverwebtest-premium.azurewebsites.net/?csvLocation=Sanity.csv&config=Sanity.json&URLLoad=true',
      show: true,
   
    },

  },
  plugins:{
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },
  }
,
  include: {
    I: './steps_file.js'
  },
  name: 'codeceptjs_AT-2'
}
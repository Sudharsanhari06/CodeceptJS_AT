


/** @type {CodeceptJS.MainConfig} */


exports.config = {
  tests: './tests/**/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://demoqa.com',
      show: true
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
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
 
// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

module.exports.config = {
  tests: './tests/**/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://demoqa.com',
      show: true
    }
  },
  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },
  },
  include: {
    I: './steps/steps_file.js'
  },
  name: 'CodeceptJS_AT'
}
# CodeceptJS Automation Project with Playwright and Allure Report

This project automates the UI testing of https://demoqa.com using CodeceptJS with Playwright and generates a report using Allure.

==========================
Folder Structure Overview
==========================

- tests/               → All test files (example: user_test.js)
- pages/               → Reusable page object files (example: webTablesPage.js)
- output/              → CodeceptJS test results and logs
- allure-results/      → Raw test result files for Allure
- allure-report/       → Final HTML Allure report (auto-generated)
- codecept.conf.js     → Main configuration file

==========================
🛠 Project Setup
==========================

1. Clone the repository:
   git clone  https://github.com/Sudharsanhari06/CodeceptJS_AT.git
   cd CODECEPTJS_AT

2. Install dependencies:
   npm install

==========================
▶️ Run Test Cases
==========================

To run tests with visible browser:

   npx codeceptjs run --steps

To run tests in headless mode (without opening browser):

   HEADLESS=true npx codeceptjs run



==========================
📦 Example Test Command
==========================

Run specific test file:

   npx codeceptjs run tests/user_test.js --steps

==========================
🔁 Reusable Page Code (POM)
==========================

Put all page-related reusable functions inside the `pages/` folder.
You can call them from test files for cleaner and structured code.

==========================
🛠 Allure CLI Installation (One Time Only)
==========================

If you haven’t installed Allure CLI:

   npm install -g allure-commandline --save-dev

==========================
✅ Summary
==========================

- CodeceptJS runs browser automation using Playwright.
- Allure generates a visual test report.
- Use page objects to organize your test logic.
- View report using `allure serve` or open the generated folder manually.


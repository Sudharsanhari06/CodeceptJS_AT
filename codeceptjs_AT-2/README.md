# CodeceptJS Automation Project with Playwright and Allure Report

This project automates UI testing of [demoqa.com](https://demoqa.com) using **CodeceptJS** with **Playwright**, and generates visual test reports using **Allure**.

---

## 📁 Folder Structure

```
├── tests/             → All test scenarios (e.g., user_test.js)
├── pages/             → Page Object Models (e.g., webTablesPage.js)
├── output/            → CodeceptJS execution logs and reports
├── allure-results/    → Raw test result files for Allure
├── allure-report/     → Generated Allure HTML reports
├── codecept.conf.js   → CodeceptJS configuration file
```

---

##  Project Setup

1. **Clone the repository**

```bash
git clone https://github.com/Sudharsanhari06/CodeceptJS_AT.git
cd CodeceptJS_AT
```

2. **Install dependencies**

```bash
npm install
```

---

## ▶️ Running Tests

### Run all tests with visible browser:

```bash
npx codeceptjs run --steps
```

### Run tests in headless mode (no browser UI):

```bash
HEADLESS=true npx codeceptjs run
```

---

##  Example Test Command

Run a specific test file:

```bash
npx codeceptjs run tests/user_test.js --steps
```

---

## ♻️ Page Object Model (POM)

All reusable page methods are placed inside the `pages/` folder.  
Import and use them in your test files for better structure and maintainability.

Example:

```js
const tablePage = require('../pages/webTablesPage');
tablePage.addNewUser();
```

---

## 📊Allure Reporting

### One-time installation of Allure CLI:

```bash
npm install -g allure-commandline --save-dev
```

### Generate Allure report after test execution:

```bash
allure serve
```

>  If `allure serve` fails, you can generate and open the report manually:

```bash
allure generate allure-results --clean -o allure-report
```

Then open `allure-report/index.html` in your browser.

---

## Summary

- ✅ Built with **CodeceptJS** and **Playwright** for UI test automation  
- ✅ Uses **Allure** for clean and interactive test reporting  
- ✅ Follows the **Page Object Model (POM)** design pattern  
- ✅ Easily configurable via `codecept.conf.js`

---

# Origin - Take-Home Assignment
# Cypress Project
## About
This project refers to automated interface tests (end-2-end) that uses Cypress as a framework. This repository contains test cases for Buy a House page.

## Frameworks and Plugins
 - [Cypress](https://www.cypress.io/)
 - [Cypress-Grep (Tags)](https://github.com/cypress-io/cypress/tree/develop/npm/grep)
 - [Cypress-mochawesome-report-generator](https://github.com/adamgruber/mochawesome-report-generator)

---

## Versions
 - Node v18.15.0
 - Cypress 12.8.1

---

## Cypress and plugins installation

## Installation
Make sure you have Node.js and npm installed.
To install the project, first clone the repository from GitHub:
1. git clone https://github.com/Megalock369/Origin-Take-Home

2. Run the following command to install the project dependencies:
npm install

3. To install the plugins run following commands:
npm i -D @cypress/grep
npm install --save-dev mochawesome

---

## Running the Tests
There are diferent commands to use in your terminal for each type of test:
To run the tests with the browser open:
    npm run cy:open

To run the tests with the browser open with Width=410 and Height=860:
npm run cy:open:mobile

To run the tests headlessly:
npm run test

To run the tests headlessly with Width=410 and Height=860:
npm run test:mobile

To run Tags tests you can use one of these:
npx cypress run --env grepTags=@date
npx cypress run --env grepTags=@money
npx cypress run --env grep="money; date"

To run tests with reports:
npx cypress run --reporter mochawesome
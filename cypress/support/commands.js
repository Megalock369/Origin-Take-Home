//This file was created to add commands that are reusable, making their maintenance easier.

//cy.get('[data-testid="input"]').type
Cypress.Commands.add('fillMoneyInput', (typeInput) => {return cy.get('[data-testid="input"]').type(typeInput)})

//cy.get('[data-testid="reachDateMonth"]').contains
Cypress.Commands.add('containsDateMonth', (conMonth) => {return cy.get('[data-testid="reachDateMonth"]').contains(conMonth)})

//cy.get('[data-testid="reachDateYear"]').contains
Cypress.Commands.add('containsDateYear', (conYear) => {return cy.get('[data-testid="reachDateYear"]').contains(conYear)})

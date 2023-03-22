/*
Objective: To verify that the system meets the business requirements and user expectations.
Scope: This test plan will cover the testing of the system from the perspective of the end user.
Test Cases:
 - As an user, I can only use numbers in money inputs field and it will be displayedin currency format
 - As an user, I want to ensure the inital date and month are the current date
 - As an user, I want to ensure Months, Year and Amount are corrects while increasing the Reach Goal
 - As an user, I want to use the keyboard arrow to increase or decrease the "reach goal"
 - As an user, I can't have a reach goal before the current date
 - As an user, I must be able to set high amounts in money inputs
*/

import * as utils from '../Utils/utils.js'

describe('Validate buyaHouse page',function(){

  function validateMonthAndYear(currentMonth, currentYear, nextMonth, nextYear){
    cy.containsDateMonth(currentMonth)
    cy.containsDateYear(currentYear)
    cy.get('[data-testid="reachDateIncrement"]').click()
    cy.containsDateMonth(nextMonth)
    cy.get('[data-testid="reachDateYear"]').should('be.visible').and('contain.text', nextYear)
  }

  beforeEach(function(){
      cy.visit('http://qa-assignment.useorigin.com.s3-website-us-east-1.amazonaws.com/')})
  
  // As an user, I can only use numbers in money inputs field and it will be displayedin currency format
  it('Validate money inputs format and restrictions', { tags: '@money'}, function(){
    cy.fillMoneyInput('abc"!@#$-K/*').should('have.value','')
    cy.fillMoneyInput('999999').should('have.value','9,999.99')
  })
  // As an user, I want to ensure the inital date and month are the current date
  it('Validate initial month and year for date inputs', { tags: '@date'}, function(){
    cy.containsDateMonth(utils.getCurrentMonth())
    cy.containsDateYear(utils.getCurrentYear())
  })

  // As an user, I want to ensure Months, Year and Amount are corrects while increasing the Reach Goal
  it('validate month, year and value for 12 right arrow clicks', { tags: ['@date','@money']}, function(){
    let moneyamount = 165749874  
    cy.fillMoneyInput(moneyamount.toString())     
    let currentMonth = utils.getCurrentMonth()
    let currentYear = utils.getCurrentYear()
    for (let i = 0; i < 12; i++) {
      let nextMonth = utils.getNextMonth(currentMonth)
      let nextYear = utils.getNextYear(currentMonth, currentYear)
      let monthlyInstallments = (((moneyamount/100)/(i+1))).toFixed(2)
      let monthlyInstallmentsStr = '$'+monthlyInstallments.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      cy.contains('Monthly amount').parent().parent().find('div').its(1).find('p').contains(monthlyInstallmentsStr)
      validateMonthAndYear(currentMonth, currentYear, nextMonth, nextYear)
      currentMonth = nextMonth
      currentYear = nextYear
    }
  })

  // As an user, I want to use the keyboard arrow to increase or decrease the "reach goal"
  it('Validate the usability of keyboard arrows in date input field', { tags: '@date'}, function(){
    cy.get('[data-testid="reachDate"]').focus()
    cy.get('[data-testid="reachDate"]').type('{rightArrow}')
    let currentMonth = utils.getCurrentMonth()
    let nextMonth = utils.getNextMonth(currentMonth)
    cy.get('[data-testid="reachDateMonth"]').should('be.visible').and('contain.text', nextMonth)
    cy.get('[data-testid="reachDate"]').focus()
    cy.get('[data-testid="reachDate"]').type('{leftArrow}')
    cy.get('[data-testid="reachDateMonth"]').should('be.visible').and('contain.text', currentMonth)
  })  
  // As an user, I can't have a reach goal before the current date
  it('Validate left arrow being disabled when current date', { tags: '@date'}, function(){
    cy.containsDateMonth(utils.getCurrentMonth())
    cy.containsDateYear(utils.getCurrentYear())
    cy.get('[data-testid="reachDateDecrement"]').click({ force: true })
    cy.get('[data-testid="reachDateDecrement"]').should('not.be.enabled')
    cy.containsDateMonth(utils.getCurrentMonth())
    cy.containsDateYear(utils.getCurrentYear())
  })

  // As an user, I must be able to set high amounts in money inputs
  it('Validate maximum amount of chacteres in money input field', { tags: '@money'}, function(){
    cy.fillMoneyInput('10000000000000000000000').should('have.value','100,000,000,000,000,000,000.00')
  })
  
})    

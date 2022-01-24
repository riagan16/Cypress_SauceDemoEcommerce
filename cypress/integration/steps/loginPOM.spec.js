//import loginPage from "../../pages/saucedemo/loginPage";
///// <reference types="cypress"/>
import loginPage from "../../pages/saucedemo/loginPage"
import inventoryPage from "../../pages/saucedemo/inventoryPage"

//const loginPage = new loginPage

describe('LoginPOM', () => {
    beforeEach( () => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('should be able to login successfully', () => {
        loginPage.typeUsername('standard_user')
        loginPage.typePassword('secret_sauce')
        loginPage.clickLogin()

        inventoryPage.elements.titleSpan().should('have.text', 'Products')
    })

    it('should not be able to login successfully', () => {
        loginPage.typeUsername('locked_out_user')
        loginPage.typePassword('secret_sauce')
        loginPage.clickLogin()

        loginPage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

})
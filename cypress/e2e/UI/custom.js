/// <reference types="cypress" />

describe('Custom commands', () => {
    it('Open T-shirts', () => {
        cy.openTshirtsTab();
    });

    it('Search Phrase', () => {
        cy.searchPhrase('Testing search box', 500);
        cy.clearInput();
    })
});
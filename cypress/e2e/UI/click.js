/// <reference types="cypress" />

describe('Click', () => {
    it('Click button', () => {
        cy.visit('/');
        cy.get('#contact-link').children('a').click();
        cy.get('[title="Return to Home"]').click();
    });
});
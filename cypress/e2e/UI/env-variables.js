/// <reference types="cypress" />

describe('Env variables', () => {
    it('Visit env', () => {
        cy.visit(Cypress.env('url'));
    });
});
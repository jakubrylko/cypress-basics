/// <reference types="cypress" />

describe('Input', () => {
    it('Type in input', () => {
        cy.visit('/');
        cy.get('#search_query_top').type('Product example {enter}', { delay: 500 });
    });

    it('Clear input', () => {
        cy.visit('/');
        cy.get('#search_query_top').type('Product example');
        cy.get('#search_query_top').clear();
    });
});
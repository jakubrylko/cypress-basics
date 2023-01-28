/// <reference types="cypress" />

describe('Invoke', () => {
    it('Invoke text', () => {
        cy.visit('/');
        cy.get('[title="Contact us"]').invoke('text').then(text => {
            cy.log(text);
        });
    });

    it('Invoke attribute', () => {
        cy.visit('/');
        cy.get('[title="Contact us"]').invoke('attr', 'href').then(link => {
            cy.log(link);
        })
        cy.get('[title="Contact us"]').invoke('attr', 'title').then(title => {
            cy.log(title);
        })
    });

    it('Invoke properties', () => {
        cy.visit('/');
        cy.get('#search_query_top').type('Test').invoke('prop', 'value').then(value => {
            cy.log(value);
        })
    });
});
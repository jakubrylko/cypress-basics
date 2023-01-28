/// <reference types="cypress" />

describe('Assertions', () => {
    it('Expect & Should', () => {
        cy.visit('/', { failOnStatusCode: false });
        // Contains text
        cy.get('a[title="Contact us"]').should('contain', 'Contact us');
        cy.get('a[title="Contact us"]').then(contact => {
            expect(contact).to.contain('Contact us');
        })
        // Not contains text
        cy.get('a[title="Contact us"]').should('not.contain', 'Error');
        cy.get('a[title="Contact us"]').then(contact => {
            expect(contact).not.to.contain('Error');
        })
        // Have class
        cy.get('#search_query_top').should('have.class', 'form-control');
        cy.get('#search_query_top').then(searchBox => {
            expect(searchBox).to.have.class('form-control');
        })
        // Is visible
        cy.get('#search_query_top').should('be.visible');
        cy.get('#search_query_top').then(searchBox => {
            expect(searchBox).to.be.visible;
        })
        // Check elements count
        cy.get('ul.sf-menu').find('li').should('have.length', 16);
        cy.get('ul.sf-menu').find('li').then(element => {
            expect(element).to.have.length(16);
        })
        // Check CSS value
        cy.get('#search_query_top').should('have.css', 'height', '45px');
        cy.get('#search_query_top').then(css => {
            expect(css).to.have.css('height', '45px');
        })
    });
});
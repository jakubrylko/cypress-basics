/// <reference types="cypress" />

describe('Shadow DOM', () => {
    it('Shadow method', () => {
        cy.visit('https://www.htmlelements.com/demos/menu/shadow-dom/index.htm');
        cy.get('.smart-ui-component').shadow().contains('File').click();
        cy.contains('Edit');
    });
});
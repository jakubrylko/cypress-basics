/// <reference types="cypress" />

describe('Upload', () => {
    it('Upload image', () => {
        cy.visit('/');
        cy.get('#contact-link a').click();
        cy.get('span.filename').should('contain', 'No file selected');
        cy.get('#fileUpload').attachFile('../fixtures/vinyl.jpeg')
        cy.get('span.filename').should('contain', 'vinyl.jpeg');
    })
})
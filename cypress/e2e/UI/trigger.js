/// <reference types="cypress" />

describe('Trigger', () => {
    it('Hover over', () => {
        cy.visit('/');
        cy.get('a[title="Dresses"]').eq(1).trigger('focus');
        cy.get('a[title="Summer Dresses"]').eq(1).click();
    })

    it('Scroll down', () => {
        cy.visit('/');
        cy.get('a[title="Dresses"]').eq(1).trigger('focus');
        cy.get('a[title="Summer Dresses"]').eq(1).click();
        cy.get('#special_block_right a[title="Specials"]').scrollIntoView();
    });
});
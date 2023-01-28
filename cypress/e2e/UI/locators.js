/// <reference types="cypress" />

describe('Homepage', () => {
    it('Locators I', () => {
        cy.visit('/');
        // Tag
        cy.get('a');
        // Id
        cy.get('#search_query_top');
        // Class
        cy.get('.form-control');
        // Attribute
        cy.get('[name="search_query"]');
        // Attribute with tag
        cy.get('input[placeholder="Search"]');
        // Multiple attributes
        cy.get('[src="http://automationpractice.pl/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]');
    });

    it('Locators II', () => {
        cy.visit('/');
        // Contains text
        cy.contains('Shop now !');
        // Contains text and attribute
        cy.contains('[title="Contact us"]', 'Contact us');
        // Locate element by parents
        cy.get('li').parents('#home-page-tabs').find('li').eq(1);
        // Locate first element 
        cy.get('li').parents('#home-page-tabs').find('li').first();
        // Locate by parents and text
        cy.get('li').parents('#home-page-tabs').find('li').contains('Best Sellers');
    });
});
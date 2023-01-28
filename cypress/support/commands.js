import 'cypress-file-upload';

Cypress.Commands.add('openTshirtsTab', () => {
    cy.visit('/');
    cy.get('.sf-menu a[title="T-shirts"]').eq(1).click();
});

Cypress.Commands.add('searchPhrase', (text, delay) => {
    cy.visit('/');
    cy.get('#search_query_top').type(text, {delay: delay});
});

Cypress.Commands.add('clearInput', () => {
    cy.get('#search_query_top').clear();
});

Cypress.Commands.add('login', (email, password) => {
    cy.get('[formcontrolname="email"]').clear();
    cy.get('[formcontrolname="password"]').clear();
    cy.get('[formcontrolname="email"]').type(email);
    cy.get('[formcontrolname="password"]').type(password);
    cy.get('button.btn').click();
});
/// <reference types="cypress" />

describe('API Tests', () => {
    beforeEach(function () {
        cy.fixture('example').then(data => {
            this.data = data;
        })
    });

    it('Get tags', function () {
        cy.intercept('GET', 'https://api.realworld.io/api/tags').as('Tags');
        cy.visit('https://angular.realworld.io/');
        cy.wait('@Tags');
        cy.get('@Tags').then(res => {
            console.log(res);
            expect(res.response.statusCode).to.equal(200);
            expect(res.response.body.tags).to.have.length(10);
            expect(res.response.body.tags).to.contain('welcome').and.to.contain('introduction');
        })
    });

    it('Incorrect login', function () {
        cy.intercept('POST', 'https://api.realworld.io/api/users/login').as('Login');
        cy.visit('https://angular.realworld.io/');
        cy.get('.nav-link').contains('Sign in').click();
        cy.login(this.data.email, this.data.password);
        cy.wait('@Login');
        cy.get('@Login').then(res => {
            console.log(res);
            expect(res.response.statusCode).to.equal(403);
            expect(res.response.statusMessage).contains(this.data.status403);
        })
    });

    it('Correct login', function () {
        cy.intercept('GET', 'https://api.realworld.io/api/tags', { fixture: 'tags.json' }).as('Tags');
        cy.visit('https://angular.realworld.io/');
        cy.get('.nav-link').contains('Sign in').click();
        cy.login(this.data.myEmail, this.data.myPassword);
        cy.wait('@Tags');
        cy.get('@Tags').then(res => {
            console.log(res);
            expect(res.response.body.tags).to.have.length(4);
            cy.fixture('tags').then(data => {
                expect(res.response.body.tags).to.contain(data.tags[0]).and.contain(data.tags[1]).and.contain(data.tags[2]).and.contain(data.tags[3]);
            })
        })
    })
}); 
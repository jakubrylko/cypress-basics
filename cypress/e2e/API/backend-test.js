/// <reference types="cypress" />

describe('Request directly to API', () => {
    let randomNumber = Math.round(Math.random() * 1000);

    it('Login and new article', function () {
        const credentials = {
            "user": {
                "email": "jabtest@op.pl",
                "password": "Appten123"
            }
        };

        const articleBody = {
            "article": {
                "tagList": [],
                "title": `Cypress test ${randomNumber}`,
                "description": "Test description",
                "body": "Test body"
            }
        };

        cy.request('POST', 'https://api.realworld.io/api/users/login', credentials).its('body').then(res => {
            const token = res.user.token;

            cy.request({
                method: 'POST',
                url: 'https://api.realworld.io/api/articles',
                body: articleBody,
                headers: {
                    'Authorization': 'Token ' + token
                }
            }).then(res => {
                expect(res.status).to.equal(200);
            })
        });
    });
}); 
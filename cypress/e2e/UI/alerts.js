/// <reference types="cypress" />

import AlertPage from '../../support/page-object/alert-page';

describe('Alerts', () => {
    it('Alert', () => {
        cy.visit('https://testowanie-oprogramowania.pl/lekcje/alerty');
        AlertPage.alert.click();
        AlertPage.assertAlertText('Przykładowa treść alertu');
    });

    it('Alert confim', () => {
        cy.visit('https://testowanie-oprogramowania.pl/lekcje/alerty');
        AlertPage.confirmAlert.click();
        AlertPage.assertConfirmText('Zaakceptuj aby kontynuować!');
        AlertPage.cancelAlert();
    });
});
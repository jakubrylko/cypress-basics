class AlertPage {
    get alert() {
        return cy.get('#alert');
    };
    get confirmAlert() {
        return cy.get('#alert-confirm');
    };
    assertAlertText(alertText) {
        cy.on('window:alert', content => {
            expect(content).to.equal(alertText);
        })
    };
    assertConfirmText(confirmText) {
        cy.on('window:confirm', content => {
            expect(content).to.equal(confirmText);
        })
    };
    cancelAlert() {
        cy.on('window:confirm', () => false);
    }
}

export default new AlertPage();
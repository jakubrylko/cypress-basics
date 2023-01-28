class DropdownPage {
    get womenTab() {
        return cy.get('.menu-content a[title="Women"]');
    }

    get dropdown() {
        return cy.get('#selectProductSort');
    };

    selectAllOptions() {
        this.dropdown.then(select => {
            cy.wrap(select).find('option').each(option => {
                cy.wrap(select, { timeout: 10000, force: true }).should('exist')
                .select(option.text());
            });
        });
    };
};

export default new DropdownPage();
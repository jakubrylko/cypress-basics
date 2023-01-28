class CheckboxPage {
    get womenTab() {
        return cy.get('#block_top_menu').find('a').contains('Women');
    };
    get categories() {
        return cy.get('#ul_layered_category_0').find('input');
    };
    get sizes() {
        return cy.get('#ul_layered_id_attribute_group_1').find('input');
    };
    checkCategories() {
        this.categories.then(checkbox => {
            cy.get(checkbox).eq(0).check();
            cy.get(checkbox).eq(1).check({ force: true });
        })
    };
    invokeCheckbox() {
        this.categories.then(checkbox => {
            cy.get(checkbox).eq(0).check().invoke('prop', 'checked').then(checked => {
                cy.log(checked);
            })
        })
    };
}

export default new CheckboxPage();
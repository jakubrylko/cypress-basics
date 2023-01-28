/// <reference types="cypress" />

import CheckboxPage from '../../support/page-object/checkbox-page';

describe('Checkbox', () => {
    it('Click checkbox', () => {
        cy.visit('/');
        CheckboxPage.womenTab.click();
        CheckboxPage.checkCategories();
    });

    it('Invoke checkbox', () => {
        cy.visit('/');
        CheckboxPage.womenTab.click();
        CheckboxPage.invokeCheckbox();
    });

    it('Several checks', () => {
        cy.visit('/');
        CheckboxPage.womenTab.click();
        CheckboxPage.sizes.check();
    });

})
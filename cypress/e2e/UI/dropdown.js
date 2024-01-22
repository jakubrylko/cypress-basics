/// <reference types="cypress" />

import DropdownPage from '../../support/page-object/dropdown-page';

describe('Dropdown', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Select by name', () => {
        DropdownPage.womenTab.click();
        DropdownPage.dropdown.select('In stock');
    });

    it('Select by value', () => {
        DropdownPage.womenTab.click();
        DropdownPage.dropdown.select('price:asc');
    });

    it('Select by index', () => {
        DropdownPage.womenTab.click();
        DropdownPage.dropdown.select(7);
    });

    it('Select all options', () => {
        DropdownPage.womenTab.click();
        DropdownPage.selectAllOptions();
    });
});

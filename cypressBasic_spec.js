/// <reference types="cypress" />

describe('successfully login', () => {

    it('login conduit', () => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=2a64fs');
        cy.get('[placeholder="Email"]').type('aloha@gmail.com');
        cy.get('[placeholder="Password"]').type('qwerty123');
        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click().wait(3000);
        cy.contains('[class="nav-link"]', 'Aloha');
    })
})
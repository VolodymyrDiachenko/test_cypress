/// <reference types="Cypress" />

let user;

describe("Docket Post Test", () => {
    before(function () {
        cy.task("freshUser").then((object) => {
            user = object;
        });
    });

    it ('sign up', () => {
        cy.visit('https://react-redux.realworld.io/#/register?_k=cd7aiy');
        
        cy.get('[placeholder="Username"]').type(user.username);
        cy.get('[placeholder="Email"]').type(user.email);
        cy.get('[placeholder="Password"]').type(user.password);

        cy.contains('[type="submit"]', 'Sign in').click();
    })
})
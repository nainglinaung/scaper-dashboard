import { faker } from '@faker-js/faker';


const email = faker.internet.email();
const password = faker.string.uuid();




before(() => {
  // Actions to be performed before the examples
  // For example, register a new user
  cy.visit('/register');
  cy.get('input[type="email"]').type(email);
  cy.get('input[type="password"]').type(password);
  cy.get('form').submit();
});

describe('Logout and Login', () => {


  it('logout and login', () => {

    // Click the "logout" link
    cy.get('#logout').click();
    cy.visit('/login')
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password).type('{enter}');
  });

  it('login and import', () => {
    cy.visit('/login')
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password).type('{enter}');
    cy.get('#fileInput').selectFile('cypress/fixtures/sample.csv');
    cy.get('#upload').click();
    cy.wait(5000);
    cy.visit('/');
    cy.get('#default-search').type('apple');
    cy.get('#searchbutton').click();


  });


})
/// <reference types="cypress" />


Cypress.Commands.add('transacao', () => {

    cy.contains("Nova Transação").click();
    cy.get("#description").type("Mesada");
    cy.get("#amount").type(100);
    cy.get("#date").type("2023-02-01");
    cy.contains("Salvar").click();

  })


  Cypress.Commands.add('asserts', () => {
    cy.get("tbody tr").should("have.length", 1)
    cy.get('tbody tr td.description').should('have.text','Mesada')
    cy.get(".alert").should("not.exist")

  })



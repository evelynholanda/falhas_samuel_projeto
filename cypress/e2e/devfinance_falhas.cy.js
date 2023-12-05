/// <reference types="cypress" />

describe('Monitorar falhas Aplicação Devfinance', () => {
    beforeEach(() => {
      cy.visit('https://devfinance-agilizei.netlify.app');
     
  });

    it('Cadastrar uma nova transação de entrada - falha 1', () => {
        cy.transacao()
        cy.asserts()

});

    it('Cadastrar uma nova transação de entrada - falha 2', () => {
        cy.transacao()
        cy.asserts()

});  

    it('Cadastrar uma nova transação de entrada - falha 3', () => {
        cy.transacao()
        cy.asserts()
});

    it('Cadastrar uma nova transação de entrada - falha 4', () => {
      cy.transacao()
      cy.asserts()
});

    it('Cadastrar uma nova transação de entrada - falha 5', () => {
      cy.transacao()
      cy.asserts()
});

    it('Cadastrar uma nova transação de entrada - falha 6', () => {
      cy.transacao()
      cy.asserts()
});

    it('Excluir transação', () => {
  
        criarTransacao("Freela", 500)
        criarTransacao("Mesada", 50) 
    
        cy.contains('.description', 'Freela') //td-> referencia
        .parent() //tr
        .find('img') //elemento que eu quero clicar      
        .click()
        cy.get('tbody tr').should('have.length', 1)
      
    });
});

function criarTransacao (descricao, valor)  {
  cy.contains('Nova Transação').click()
  cy.get('#description').type(descricao)
  cy.get('#amount').type(valor)
  cy.get('#date').type("2023-05-13")
  
  cy.contains('button', 'Salvar').click()
  
}


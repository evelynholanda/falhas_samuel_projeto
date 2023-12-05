/// <reference types="cypress" />

//Hooks - trechos de codigos que executa antes ou depois dos testes
//before, beforeEach
//after, afterEach
beforeEach(() => {
    cy.visit("https://dev-finance.netlify.app/#")

})

describe('Transações DevFinances', () => {
it('cadastrar uma entrada', () => {
   
    criarTransacao("Freela", 500)
    cy.get('tbody tr td.description').should('have.text','Freela')
  
});

it('Cadastrar uma saída', () => {
   
    criarTransacao("Cinema", -100)
    cy.get('tbody tr td.description').should('have.text','Cinema')
});

it('Excluir Transacao', () => {

    criarTransacao("Freela", 500)
    criarTransacao("Mesada", 50)

    cy.contains('.description', 'Freela') //td-> referencia
    .parent() //tr
    .find('img') //elemento que eu quero clicar      
    .click()
    cy.get('tbody tr').should('have.length', 1)
     //  pode encontrar tambem pelos irmaos fica a dica
//         cy.contains('.description', 'Freela')
//         .siblings()
//         .children('img')
//         .click()
//         cy.get('tbody tr').should('have.length', 1)

    
    
});

//Criando Função que Cria uma transação pois ela se repete- seja transação Positiva ou Negativa
function criarTransacao (descricao, valor)  {
    cy.contains('Nova Transação').click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-05-13")
    
    cy.contains('button', 'Salvar').click()
    
}
});




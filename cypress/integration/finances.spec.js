/// <reference types="cypress" />

context('Dev Finances Agilizei', () => {
        // hooks
        // trecho que executam antes e depois do teste
        // before -> antes de todos os testes
        // beforeEach -> antes de cada teste
        // after -> depois de todos os testes
        // afterEach -> depois de cada teste

        beforeEach(() => {
            cy.visit('https://devfinance-agilizei.netlify.app')
            cy.get('#data-table tbody tr').should('have.length', 0)
            
        });
        it.only.only('Cadastrar entradas', () => {
       
        

        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type('Mesada')  // id
        cy.get('[name=amount').type(12)  // atributos
        cy.get('[type=date]').type('2021-03-17')  // atributos
        cy.get('button').contains('Salvar').click() // tipo e valor

        cy.get('#data-table tbody tr').should('have.length', 1)
        

    });

    it('Cadastrar saídas', () => {
       
        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type('Mesada')  // id
        cy.get('[name=amount').type(-12)  // atributos
        cy.get('[type=date]').type('2021-03-17')  // atributos
        cy.get('button').contains('Salvar').click() // tipo e valor

        cy.get('#data-table tbody tr').should('have.length', 1)
        
    });

    it.only('Remover entradas e saídas', () => {
        const entrada   = 'Mesada'
        const saída     = 'KinderOvo'

        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type(entrada)  // id
        cy.get('[name=amount').type(100)  // atributos
        cy.get('[type=date]').type('2021-03-17')  // atributos
        cy.get('button').contains('Salvar').click() // tipo e valor

        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type(saída)  // id
        cy.get('[name=amount').type(-35)  // atributos
        cy.get('[type=date]').type('2021-03-17')  // atributos
        cy.get('button').contains('Salvar').click() // tipo e valor
        
        // estrategia 1 : voltar para o elemento pai, e avançar para um td img attr
        
        cy.get('td.description')
          .contains(entrada)
          .parent()
          .find('img[onclick*=remove]')
          .click()

        // estrategia 2 : buscar todos os irmãos, e buscar oque tem imag +attr  

        cy.get('td.description')
          .contains(saída)
          .siblings()
          .children('img[onclick*=remove]')
          .click()

          cy.get('#data-table tbody tr').should('have.length', 0)

    });
    
});

        // - entender o fluxo manualmente
        // - mapear os elementos que vamos interagir
        // - descrever as interações com o cypress
        // - adicionar as asserções que a gente precisa 


    
describe('Tela Home', () => {
  beforeEach(() => {
    cy.visit('../home.html')
  })

  it('Navbar tem o nome do aplicativo', () => {
    cy.get('.navbar-brand').should('contain', 'Connext')
  })

  it('Botão Login/Cadastro existe e funciona', () => {
    cy.contains('Login / Cadastro').click()
    cy.visit('./login.html')
  })

  it('Hero apresenta mensagem de boas-vindas', () => {
    cy.contains('Bem-vindo ao Connext').should('exist')
  })

  it('Objetivos aparecem na página', () => {
    cy.get('ul li').should('have.length.at.least', 4)
  })
})

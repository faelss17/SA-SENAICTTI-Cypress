describe('Tela de Login', () => {
  beforeEach(() => {
    cy.visit('./login.html')
  })

  it('Exibe os elementos principais', () => {
    cy.get('#emailLogin').should('exist')
    cy.get('#passwordLogin').should('exist')
    cy.get('#btEntrar').should('contain', 'Entrar')
  })

  it('Escreve e-mail e senha', () => {
    cy.get('#emailLogin').type('teste@teste.com')
    cy.get('#passwordLogin').type('123456')
  })

  it('Clica no botão Entrar e vai para a Home', () => {
    cy.get('#btEntrar').click()
    cy.visit('./home.html')
  })
})

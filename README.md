README — Testes Automatizados E2E com Cypress

Projeto: Connext — SENAI MG

Este repositório contém os testes End-to-End (E2E) desenvolvidos com Cypress para validar a interface web da aplicação Connext.

Os testes contemplam duas páginas principais:

Tela de Login

Tela Home

Essas telas foram desenvolvidas como parte da UC anterior do curso e agora passam por testes automatizados para garantir funcionamento correto dos elementos visuais e da navegação.

- Objetivos dos Testes

Verificar se os elementos essenciais da interface estão visíveis e funcionais

Validar usabilidade de inputs e botões

Testar navegação entre as páginas

Garantir consistência da estrutura da página web

- Tecnologias utilizadas
Tecnologia	Função
Cypress 13.x	Execução dos testes E2E
Node.js	Ambiente para rodar o Cypress

📂 Estrutura do Projeto
/
├── home.html
├── login.html
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── home.cy.js
│   ├── support/
│   └── fixtures/
├── cypress.config.js
├── package.json
└── README.md

- Como executar os testes
- 
1️⃣ Instalar dependências
npm install

2️⃣ Abrir a interface do Cypress
npx cypress open

3️⃣ Selecionar:

➡ E2E Testing
➡ Escolher o navegador
➡ Executar os testes:

login.cy.js

home.cy.js

- Cenários de Teste Implementados
  
Página	Cenário	O que valida
Login	Exibição dos elementos principais	Verifica inputs e botão
Login	Inserção de dados	Permite digitação em e-mail e senha
Login	Navegação	Ao clicar em “Entrar” → Home
Login	Link Criar Conta	Navegação para cadastro
Home	Navbar visível	Exibe nome do sistema: Connext
Home	Navegação para Login	Botão Login/Cadastro funciona
Home	Conteúdo da Hero	Exibe título “Bem-vindo ao Connext”
Home	Lista de objetivos	Pelo menos 4 itens são renderizados

- Demonstração dos Testes

Durante a apresentação, será exibida a execução completa dos testes em um grupo pré-selecionado, conforme os requisitos da UC.

Autor

Rafael Duarte — SENAI Minas Gerais
Projeto avaliativo da UC: Testes Automatizados com Cypress

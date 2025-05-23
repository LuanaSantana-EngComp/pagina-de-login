describe('Página de login com cenários negativos', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  })

  it('Deve preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página', () => {
    cy.get('input[name="username"]').type('Luana123'); // Digita o nome de usuário
    cy.get('input[name="password"]').type('123a'); // Digita a senha
    cy.get('button[type="submit"]').click(); // Conecte-se
    cy.contains('Your username is invalid!').should('be.visible');     
    cy.wait(2000);
  })
  
  it('Tentativa de login com campos vazios', () => {
    cy.get('input[name="username"]').type(' '); 
    cy.get('input[name="password"]').type(' ');
    cy.get('button[type="submit"]').click(); 
    cy.contains('Your username is invalid!').should('be.visible'); 
    cy.wait(2000);
  })

  it('Login nome do usuário válido e senha em branco', () => {
    cy.get('input[name="username"]').type('tomsmith');
    cy.get('input[name="password"]').type(' ');
    cy.get('button[type="submit"]').click(); 
    cy.contains('Your password is invalid!').should('be.visible');
    cy.wait(2000);
  })

  it('Login nome do usuário em branco e senha válida', () => {
    cy.get('input[name="username"]').type(' ');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click(); 
    cy.contains('Your username is invalid!').should('be.visible');
    cy.wait(2000);
  })

  it('Login com usuário válido e senha invalida', () => {
      cy.get('input[name="username"]').type('tomsmith');
      cy.get('input[name="password"]').type('123');
      cy.get('button[type="submit"]').click(); 
      cy.contains('Your password is invalid!').should('be.visible');  
      cy.wait(2000);
    })

  it('Login com nome do usuário inválido e senha válida', () => {
    cy.get('input[name="username"]').type('Luana');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click(); 
    cy.contains('Your username is invalid!').should('be.visible');
    cy.wait(2000);
  })

  it('Login com usuário e senha com espaços em branco no início ou fim', () => {
    cy.get('input[name="username"]').type(' tomsmith '); 
    cy.get('input[name="password"]').type(' SuperSecretPassword! ');
    cy.get('button[type="submit"]').click();
    cy.contains('Your username is invalid!').should('be.visible');
    cy.wait(2000);
  })
})  
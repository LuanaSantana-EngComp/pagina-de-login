describe('Teste de Login com cenário positivo', () => {
  it('Deve preencher os campos do login corretamente e autenticar o usuário na página e deslogar', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

  // Preenche os campos de login
    cy.get('input[name="username"]').type('tomsmith'); // Digita o nome de usuário
    cy.get('input[name="password"]').type('SuperSecretPassword!'); // Digita a senha
    cy.get('button[type="submit"]').click(); // Conecte-se

  // Usuário autenticado na página e verifica as informações
    cy.contains('You logged into a secure area!').should('be.visible');
    cy.contains('Secure Area').should('be.visible');
    cy.contains('Welcome to the Secure Area. When you are done click logout below.').should('be.visible');
    cy.wait(2000);

  // Usuario desloga da página 
    cy.get('.button.secondary.radius').click(); // Logout
    cy.contains('You logged out of the secure area!').should('be.visible');
    cy.wait(2000);
  });
});
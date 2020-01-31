describe('login flow', () => {
  it('can successfully log in', () => {
    cy.visit('/')
      .findByText(/sign in/i)
      .click()
    cy.findByPlaceholderText(/enter your username/i)
      .type('TestUser')
    cy.findByText(/continue/i)
      .click()
    cy.findByPlaceholderText(/enter your password/i)
      .type('password')
    cy.findByTitle(/sign in/i)
      .click()
    cy.findByText(/Welcome/i)
  });
});
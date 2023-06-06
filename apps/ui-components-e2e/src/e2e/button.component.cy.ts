describe('ui-components', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=buttoncomponent--primary&args=text;')
  );
  it('should render the component', () => {
    cy.get('g-button').should('exist');
  });
});

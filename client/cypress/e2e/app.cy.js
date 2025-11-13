describe('AgroVision App - E2E', () => {
it('loads the app and finds a button', () => {
cy.visit('http://localhost:5173');
cy.contains('App');
cy.get('button').should('exist');
});
});
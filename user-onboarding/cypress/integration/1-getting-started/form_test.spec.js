describe('Checking that cypress can navigate to my site and run tests', () => {

    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    const textInput = () => cy.get('input[name=first_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsInput = () => cy.get('input[name=terms]');

    it('grabbing the name input and typing the name into it', () => {
        textInput().should('exist');
        textInput().type('Ryan');
        textInput().should('exist').contains('Ryan');
    })
})
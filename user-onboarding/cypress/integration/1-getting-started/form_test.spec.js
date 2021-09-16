describe('Checking that cypress can navigate to my site and run tests', () => {

    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    const textInput = () => cy.get('input[name=first_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsInput = () => cy.get('input[name=terms]');
    const submitBtn = () => cy.get('button');
    

    it('grabbing the name input and typing the name into it', () => {
        textInput().should('exist');
        textInput().type('Ryan');
        textInput().should('have.value', 'Ryan');
    })

    it('grabbing the email input and typing an email into it', () => {
        emailInput().should('exist');
        emailInput().type('fakeemail@email.com');
        emailInput().should('have.value', 'fakeemail@email.com');
    })
    
    it('grabbing the password input and typing a password into it', () => {
        passwordInput().should('exist');
        passwordInput().type('somepassword');
        passwordInput().should('have.value', 'somepassword');
    })

    it('checking if the terms of service can be checked', () => {
        termsInput().should('exist');
        termsInput().click();
    })

    it('checking to see if I can submit the form', () => {
        textInput().type('Ryan');
        emailInput().type('anemail@email.com');
        passwordInput().type('apassword');
        submitBtn().should('exist');
        termsInput().click();
        submitBtn().click();
    })
})
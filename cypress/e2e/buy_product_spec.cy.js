describe('Compra de producto y página de agradecimiento', () => {
    it('Debería navegar desde la home hasta la página de agradecimiento', () => {
        // Visitar la página de inicio (la url debería de cogerla de forma dinámica del archivo .env o framkework si tuvieramos distintos entornos))
        cy.visit('localhost:8000');

        // Clickar en un producto
        cy.get('.product').first().click();

        // Clickar en el botón de comprar
        cy.get('.buy-button').click();

        // Verificar que se muestra la página de agradecimiento
        cy.url().should('include', '/thank-you');
    });
});

describe("Increase quantity of product in cart",function(){
    beforeEach(function(){
        cy.visit('localhost:3000')
    })
    it('Should increase product quantity in Cart', function(){
        cy.addProductToCart("Sonic Mania Plus (Nintendo Switch)");
        cy.goToCart();
        cy.findProductInCart("Sonic Mania Plus (Nintendo Switch)");
        cy.increaseProductQuantity("Sonic Mania Plus (Nintendo Switch)",3);
    })
})
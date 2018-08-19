describe('Multiple items in Cart',function(){
    beforeEach(function(){
        cy.visit('localhost:3000')
    })
    it ("Should show all products in Cart", function(){
        const products=[ "Nintendo Switch Pro Controller - Black",
        "Nintendo Switch - Neon Red/Neon Blue",
        'Sonic Mania Plus (Nintendo Switch)'
        ]
        for( const product of products){
            cy.addProductToCart(product);
        }
        cy.goToCart();
        for( const product of products){
            cy.findProductInCart(product);
        }
    })
})
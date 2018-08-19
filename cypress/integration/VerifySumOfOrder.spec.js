describe("Cart Order sum",function(){
    beforeEach(function(){
        cy.visit('localhost:3000')
    })
    it("Should display correct sum of order in Cart", function(){
        var products = {
            "Nintendo Switch Pro Controller - Black": 1600.99,
        "Nintendo Switch - Neon Red/Neon Blue": 180,
        'Sonic Mania Plus (Nintendo Switch)': 165
        }
        for( var productKey in products){
            cy.addProductToCart(productKey);
        }
        var expectedSum=0;
        for (var productKey in products){
            expectedSum+=products[productKey];
        }
        cy.log(expectedSum);
        var productsCount=Object.keys(products).length;
        cy.get('li.ant-menu-item:nth-child(2) > a:nth-child(1)').invoke('text')
        .should('equal'," Cart: "+productsCount+" items ("+expectedSum+" zł)");
    })
})
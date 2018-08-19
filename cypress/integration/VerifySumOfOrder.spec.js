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
        var productsCounts= {
            "Nintendo Switch Pro Controller - Black": 1,
        "Nintendo Switch - Neon Red/Neon Blue": 2,
        'Sonic Mania Plus (Nintendo Switch)': 3
        }
        for( var productKey in products){
            cy.addProductToCart(productKey);
        }
        var expectedSum=0;
        cy.goToCart();
        for (var productKey in productsCounts){
            if (productsCounts[productKey]>1){
                cy.increaseProductQuantity(productKey,productsCounts[productKey]-1);
            }
        }
        cy.goToDeliveryPage();
        cy.fillDeliveryForm('Vasia Pupkin','Ząbkowska','Warsaw','Poland');
        cy.submitOrder('In store pickup');
        cy.contains('Next').click();
        cy.get('.ant-select-arrow').click();
        cy.contains('Post Delivery').click();
        for (var productKey in products){
            expectedSum+=products[productKey]*productsCounts[productKey];
        }
        expectedSum+=5;


        cy.log(expectedSum);
        cy.get('.ant-layout-content > div:nth-child(1) > div:nth-child(5) > p:nth-child(1) > strong:nth-child(1)')
        .invoke('text').should('equal','Your order total:'+ expectedSum+'zł');

    })

 
})
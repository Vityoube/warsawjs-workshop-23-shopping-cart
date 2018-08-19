describe("Add Item To Cart", function(){
    it("should add item to basket", function(){
        cy.visit("http://localhost:3000/");
        cy.addItemToCart();
    })

})
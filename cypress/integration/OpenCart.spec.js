describe("Open Cart View",function(){
    it('should open cart view', function(){
        cy.visit("http://localhost:3000/");
        cy.openCart();
    });
})
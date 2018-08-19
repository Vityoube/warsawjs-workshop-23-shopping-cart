describe("Warmup", function(){
    it("Finds a Nintendo Switch Neo Product name on page", function(){
        cy.visit("http://127.0.0.1:3000/");

        cy.contains('Nintendo Switch - Neo');
    })

    it("Doesn't find Sony Playstation 3 Product name", function(){
        cy.visit("http://127.0.0.1:3000/");

        cy.contains("Sony Playstation 3");
        
    })
})
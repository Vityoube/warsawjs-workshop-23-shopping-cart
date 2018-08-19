import { ProductsList } from "../../src/components";

describe("Happy Path",function(){
    beforeEach(function(){
        cy.visit('localhost:3000')
    })

    it('Should Add Item to Cart',function(){
        cy.contains("Cart: 0 items");
        cy.addProductToCart("Sonic Mania Plus");
        cy.contains("Cart: 1 items");
    })


    // TODO
    // it('Should Add item as a Promise',function(){

    //     const productList=cy.get('.ant-layout-content > div:nth-child(1)');
    //     productList.get('.ant-card')
    //     .first()
    //     .contains('Buy')
    //     .click();
    //     productList
    //   .get(".ant-card")
    //   .first()
    //   .find(".ant-card-meta-title")
    //   .then(titleTag => {
    //     cy.openCart();
    //     cy.get("[data-test-id=main-content]").contains(titleTag.text());
    //   });
    // })

    it('Should View Cart page',function(){
        cy.goToCart();
    })

    it("Should display Product in Cart",function(){
        cy.addProductToCart("Sonic Mania Plus");
        cy.goToCart();
        cy.findProductInCart("Sonic Mania Plus");
    })

    it("Should remove Product from Cart", function(){
        cy.addProductToCart("Sonic Mania Plus (Nintendo Switch)");
        cy.goToCart();
        cy.findProductInCart("Sonic Mania Plus (Nintendo Switch");
        // cy.removeProduct("Sonic Mania Plus");  TODO add possibility to remove Product from Cart
    })

    it("Should clear Cart",function(){
        cy.addProductToCart("Sonic Mania Plus (Nintendo Switch");
        cy.goToCart();
        cy.findProductInCart("Sonic Mania Plus (Nintendo Switch");
        cy.clearCart();
    })

    it("Should go to Delivery page",function(){
        cy.addProductToCart("Sonic Mania Plus (Nintendo Switch");
        cy.goToCart();
        cy.findProductInCart("Sonic Mania Plus (Nintendo Switch");
        cy.goToDeliveryPage();
    })

    it("Should fill Delivery form",function(){
        cy.addProductToCart("Sonic Mania Plus (Nintendo Switch");
        cy.goToCart();
        cy.findProductInCart("Sonic Mania Plus (Nintendo Switch");
        cy.goToDeliveryPage();
        cy.fillDeliveryForm('Vasia Pupkin','Ząbkowska','Warsaw','Poland');
    })

    it('Should Submit Form with Delivery Method',function(){
        cy.addProductToCart("Sonic Mania Plus (Nintendo Switch)");
        cy.goToCart();
        cy.findProductInCart("Sonic Mania Plus (Nintendo Switch)");
        cy.goToDeliveryPage();
        cy.fillDeliveryForm('Vasia Pupkin','Ząbkowska','Warsaw','Poland');
        cy.submitOrder('In store pickup');
        cy.get('.ant-list-item-meta-title > a:nth-child(1)').invoke('text').should('equal','Sonic Mania Plus (Nintendo Switch)');
        cy.get('.ant-layout-content > div:nth-child(1) > div:nth-child(3) > p:nth-child(2) > strong:nth-child(1)')
        .invoke('text').should('equal','Vasia Pupkin');
        cy.get('.ant-layout-content > div:nth-child(1) > div:nth-child(3) > p:nth-child(3) > strong:nth-child(1)')
        .invoke('text').should('equal','Ząbkowska')
        cy.get('.ant-layout-content > div:nth-child(1) > div:nth-child(3) > p:nth-child(4) > strong:nth-child(1)')
        .invoke('text').should('equal','Warsaw');
        cy.get('.ant-layout-content > div:nth-child(1) > div:nth-child(3) > p:nth-child(5) > strong:nth-child(1)')
        .invoke('text').should('equal','Poland');
        cy.get('.ant-layout-content > div:nth-child(1) > div:nth-child(4) > p:nth-child(2)')
        .invoke('text').should('equal','In store pickup');
        cy.contains('Finish your order').click();
        cy.get('li.ant-menu-item:nth-child(2) > a:nth-child(1)').invoke('text').should('equal',' Cart: 0 items');
    })
    
    
})
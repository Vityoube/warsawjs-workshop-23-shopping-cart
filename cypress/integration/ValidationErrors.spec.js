describe('Validation Errors',function(){
    beforeEach(function(){
        cy.visit('localhost:3000')
    })
    it("Should display errors on Delivery Form",function(){
        cy.addProductToCart("Sonic Mania Plus (Nintendo Switch");
        cy.goToCart();
        cy.findProductInCart("Sonic Mania Plus (Nintendo Switch");
        cy.goToDeliveryPage();
        cy.fillDeliveryForm('','Ząbkowska','Warsaw','Poland');
        cy.contains('Next').click();
        cy.get('div.ant-row:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)').should('exist');
        cy.get('div.ant-row:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)').invoke('text')
        .should('equal','Please enter your full name');
        cy.contains('Go back').click();
        cy.contains('Next').click();
        

        cy.fillDeliveryForm('Vasia Pupkin','','Warsaw','Poland');
        
        
        cy.contains('Next').click();
        cy.get('div.ant-row:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)').should('exist');
        cy.get('div.ant-row:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)').invoke('text')
        .should('equal','Please enter street name');
        
        cy.contains('Go back').click();
        cy.contains('Next').click();
        cy.fillDeliveryForm('Vasia Pupkin','Ząbkowska','','Poland');
        cy.contains('Next').click();
        cy.get('div.ant-row:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)').should('exist');
        cy.get('div.ant-row:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)').invoke('text')
        .should('equal','Please enter city name');
        
    })
})
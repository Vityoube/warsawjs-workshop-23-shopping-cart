Cypress.Commands.add("addProductToCart",function(productName){
    cy.contains(productName).parent().parent().parent().parent().contains("Buy").click();
})

Cypress.Commands.add("goToCart",function(){
    cy.contains("Cart").click();
    cy.url().should('equal',"http://localhost:3000/cart")
})

Cypress.Commands.add("findProductInCart",function(productName){
    cy.contains(productName);
})

Cypress.Commands.add("removeProduct",function(productName){
    cy.wait(1000);
    cy.contains(productName).parent().parent().parent().parent().contains('remove').should('be','visible');
    cy.should().not('contain',productName);
})

Cypress.Commands.add("clearCart",function(){
    cy.contains('Clear cart').click();
    cy.contains("Cart: 0 items");
    cy.get('.ant-list-empty-text').should('exist');
})

Cypress.Commands.add('goToDeliveryPage',function(){
    cy.contains('Next').click();
    cy.url().should('equal','http://localhost:3000/address');
})

Cypress.Commands.add('fillDeliveryForm',function(fullName,streetAddress,city,country){
    if(fullName.length>0)
        cy.get('#fullname').type(fullName);
    if(streetAddress.length>0)
        cy.get('#street').type(streetAddress);
    if(city.length>0)
        cy.get('#city').type(city);
    if(country.length>0){
        cy.get('.ant-cascader-picker-label').click();
        cy.contains(country).click();
    }

})

Cypress.Commands.add('submitOrder',function(deliveryMethod){
    cy.contains('Next').click();
    cy.get('.ant-select-arrow').click();
    cy.contains(deliveryMethod).click();
    cy.contains('Next').click();
    
})

Cypress.Commands.add('increaseProductQuantity',function(productName,count){
    for (var i=0;i<count;i++){
        cy.contains(productName).parent().parent().parent().parent().children('div:nth-child(2)').children('div')
    .children('button:nth-child(3)').click();
    }
    cy.contains(productName).parent().parent().parent().parent().children('div:nth-child(2)').children('div')
    .children('strong').invoke('text').should('equal',(count+1).toString());
    
})


Cypress.Commands.add('clearDeliveryFields',function(){
    if(cy.get('#fullname').invoke('textContent').length!=0 )
    cy.get('#fullname').clear();
    if(cy.get('#street').invoke('textContent').length!=0)
        cy.get('#street').clear();
    if(cy.get('#city').invoke('textContent').length!=0)
        cy.get('#city').clear();
    if(cy.get('#country').invoke('textContent').length!=0){
        cy.get('#country').clear();
    }
    
})
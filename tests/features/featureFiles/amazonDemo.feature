Feature: Add amazon basics product to the card

 @amazon
 @Scenario1
  Scenario: Ensure navigating from amazon home page to home & kitchen page is successful

    Given I am on the Amazon homepage
    When  I click on Amazon homekitchen link
    Then  I landed on the Amazon homekitchen page

@amazon
 @Scenario2
 Scenario Outline: Ensure filtering amazon brand products on home & kitchen page is successful

    Given I have selected Our Brands category on Amazon homekitchen page
    When  I select a product <product> from the results 
    Then  the selected product <product> page is displayed
    And   the color of the product is as expected <size>
    
    Examples: 
    |product|color|
    |YIOU Air Purifier for Home Large Room Up to 547ft²|Grey|
    
  @amazon
  @Scenario3
  Scenario: Ensure adding product to cart is successful
    
    Given product is added to cart
    When  I check the items in cart  
    Then  the cart shows count 1

 


 


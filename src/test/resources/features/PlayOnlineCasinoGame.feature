Feature: As a new moneygaming.com player
  I want to be able to register using my full details
  So that I can play online casino games

  Scenario: JOIN Now into Moneygaming website

    Given I navigated to moneygaming.com
    When  I click on JOIN NOW Link
    And   I Select a title as "Mr" from the dropdown
    And   I Enter your first name as "John" in the form
    And   I Enter your sure name as "Paul"  in the form
    And   I Check the tickbox with text I accept the Terms and Conditions and certify that I am ove the age of 18
    And   I Submit the form by clicking the JOIN NOW button
    Then  I Validate that a validation message with text "This field is required" appears under the date of   birth box

Feature: Login to parabank using Excel data
 Scenario: Login with data from Excel
    Given I open the Parabank login page
    When I login with data from Excel
    Then I should see appropriate login result

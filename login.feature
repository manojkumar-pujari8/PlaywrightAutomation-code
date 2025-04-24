Feature: parabank login

      Scenario Outline: Login with multiple credentials using cucumber data table.
            Given multiple login credentials with "<username>" and "<password>"
            When I login using the following credentials
            Then I should see appropriate login result "<status>"
            Examples:
                  | username    | password        | status       |
                  | john        | demo            | successful   |
                  | invaliduser | invalidpassword | unsuccessful |



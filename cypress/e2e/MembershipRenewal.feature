Feature: Online membership renewal

    Background:
        Given Jon Doe is a registered member

    Rule: any registered user can renew its membership

        Scenario: Successfully renew membership with valid payment
            When I navigate to the membership renewal page
            And I select a "1 year" renewal period
            And I enter valid payment details
            And I submit the renewal form
            Then I should see a success message
            And my membership expiration date should be extended by 1 year
            And I should receive a confirmation email
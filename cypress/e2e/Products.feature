Feature: Products

	Rule: Display availability status for each product based on stock levels
		- More than 10 items: "Disponibile" (green)
		- 10 or fewer items: "Scorte in esaurimento" (yellow)
		- 0 or fewer items: "Esaurito" (red)

	Background:
		Given I am on the products page
		Given an active product in the catalog

	Scenario Outline: User views products with different availability statuses
		Given the following products exist:
			| name      | stock |
			| Product A | 15    |
			| Product B | 8     |
			| Product C | 0     |
			| Product D | -5    |
		When I view the products list
		Then I should see "<product>" with "<status>" status in <color>

		Examples:
			| product   | status                 | color  |
			| Product A | Disponibile            | green  |
			| Product B | Scorte in esaurimento  | yellow |
			| Product C | Esaurito               | red    |
			| Product D | Esaurito               | red    |

	Scenario: User views an empty product list
		Given there are no products available
		When I view the products list
		Then I should see an empty products list message
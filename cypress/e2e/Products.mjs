import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Background step
Given("I am on the products page", () => {
	cy.visit("/products");
});

Given("an active product in the catalog", () => {
	// Stub the API to return at least one product
	cy.intercept("GET", "/api/products", {
		statusCode: 200,
		body: [{ name: "Sample Product", stock: 10 }],
	}).as("getProducts");
});

// Setup steps for Scenario Outline
Given("the following products exist:", (dataTable) => {
	const products = dataTable.hashes().map((row) => ({
		name: row.name,
		stock: Number.parseInt(row.stock, 10),
	}));

	// Stub the API to return the products from the data table
	cy.intercept("GET", "/api/products", {
		statusCode: 200,
		body: products,
	}).as("getProducts");
});

// When steps
When("I view the products list", () => {
	// The page should already be loaded from Background
	// Wait for products list to be rendered using semantic query
	cy.findByRole("list", { timeout: 10000 }).should("exist");
});

// Then steps for Scenario Outline
Then(
	"I should see {string} with {string} status in {word}",
	(productName, status, color) => {
		// Find the product card/item
		cy.findByText(productName)
			.parent()
			.within(() => {
				// Find the status badge/label
				cy.findByText(new RegExp(status, "i")).should("exist");

				// Verify the color styling
				cy.findByText(new RegExp(status, "i")).should(
					"have.css",
					"background-color",
					getColorValue(color),
				);
			});
	},
);

// Empty product list scenario
Given("there are no products available", () => {
	// Stub the API to return an empty array
	cy.intercept("GET", "/api/products", {
		statusCode: 200,
		body: [],
	}).as("getProducts");
});

Then("I should see an empty products list message", () => {
	cy.findByText(/no products available/i).should("be.visible");
});

// Helper function to convert color names to CSS values
function getColorValue(colorName) {
	const colorMap = {
		green: "rgb(34, 197, 94)", // Tailwind green-500 or similar
		yellow: "rgb(234, 179, 8)", // Tailwind yellow-500 or similar
		red: "rgb(239, 68, 68)", // Tailwind red-500 or similar
	};

	// Return the mapped color or the original if not found
	// You may need to adjust these RGB values based on your actual CSS
	return colorMap[colorName.toLowerCase()] || colorName;
}

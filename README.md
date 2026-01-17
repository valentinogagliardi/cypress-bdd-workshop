# Cypress BDD Workshop

A hands-on workshop for learning Behavior-Driven Development (BDD) with Cypress and Cucumber.

## Prerequisites

- Node.js (v22 or higher recommended)
- npm

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Backend Server

The workshop includes a Fastify server that serves the membership renewal application:

```bash
npm start
```

The server will start on `http://localhost:3000`. Keep this terminal window open.

### 3. Run the Tests

In a **separate terminal window**, run the Cypress tests:

```bash
# Run tests in headless mode
npm run e2e:headless

# Or open Cypress interactive mode
npm run e2e:open
```

## Workshop Structure

This workshop uses the **Given-When-Then** pattern with Cucumber/Gherkin syntax:

- **Feature files** (`.feature`): Define test scenarios in human-readable format
- **Step definitions** (`.mjs`): Implement the actual test logic for each step
- **Testing Library**: Use accessible queries to select elements

## Workshop Challenges

You'll need to fix several intentional issues in both the tests and the application. Work through these challenges in order:

### Challenge 1: Implement Testing Library Queries

**Issue**: The step definitions in `cypress/e2e/Template.mjs` are missing the actual assertions.

**Your Task**:
- Use queries from `@testing-library/cypress` to test the actual HTML elements. Remember to use accessible queries.

**Hint**: Check the feature file to understand what elements the tests need to find.

### Challenge 2: Fix HTML issues

**Issue**: Some form fields in the frontend don't have proper labels or the labels don't match what the tests expect.

**Your Task**:
- Review HTML templates and fix the accessibility issues

## License

MIT

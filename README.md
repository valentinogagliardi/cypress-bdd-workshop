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

### Challenge 0: Complete the scenarios

**Issue**: The feature files in `cypress/e2e` are missing some scenarios.

**Your Task**:
- Complete the missing scenarios in the feature files to cover all the functionalities of the application.

### Challenge 1: Implement Testing Library Queries

**Issue**: The step definitions in `cypress/e2e/Template.mjs` are missing the actual assertions.

**Your Task**:
- Use queries from `@testing-library/cypress` to test the actual HTML elements. Remember to use accessible queries.

**Hint**: Check the feature file to understand what elements the tests need to find.

### Challenge 2: Fix HTML issues

**Issue**: Some form fields in the frontend don't have proper labels or the labels don't match what the tests expect.

### Challenge 3: Fix the Backend

**Issue**: The backend in `server.mjs` has multiple issues.

**Your Task**:
- Review the POST `/membership/renewal` route handler
- Identify and fix any issues with request handling and data processing

## Running Unit Tests

```bash
npm test
```

## Resources

- [Cypress Cucumber Preprocessor Docs](https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/readme.md)
- [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/)
- [Cucumber/Gherkin Syntax](https://cucumber.io/docs/gherkin/)
- [Vitest Documentation](https://vitest.dev)

## License

MIT

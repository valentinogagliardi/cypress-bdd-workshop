# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Cypress BDD (Behavior-Driven Development) workshop project that uses Cucumber/Gherkin syntax for writing E2E tests. The project demonstrates how to write and execute BDD-style tests using Cypress with the Cucumber preprocessor.

## Architecture

## Frontend

The frontend for this project uses semantic, accessible HTML and vanilla JavaScript.

## Backend

The backend is implemented with Fastify and SqLite as a database.

### BDD Test Structure

Tests follow the Cucumber/Gherkin BDD pattern:

1. **Feature files** (`.feature`): Written in Gherkin syntax, located in `cypress/e2e/`
   - Define test scenarios using Given/When/Then steps
   - Use Background sections for setup steps common to all scenarios

2. **Step definitions** (`.mjs`): Co-located with feature files in `cypress/e2e/`
   - Import step definition functions from `@badeball/cypress-cucumber-preprocessor`
   - Implement the actual test logic for each Gherkin step
   - Use ES modules (`.mjs` extension)

3. **Support files**: Located in `cypress/support/`
   - `commands.js`: Custom Cypress commands (imports Testing Library)
   - `e2e.js`: Global configuration loaded before tests

### Cypress Configuration

The `cypress.config.mjs` file:
- Uses ES modules
- Configures spec pattern to match `.feature` files
- Sets up Cucumber preprocessor with esbuild bundler
- Defines base URL via `url` property (currently set to localhost:3000)

### Code Style

The project uses Biome with these conventions:
- Tabs for indentation
- Double quotes for JavaScript strings
- Organize imports automatically
- Git-aware formatting (respects .gitignore)

## Testing Patterns

- Use `@testing-library/cypress` queries (`findByRole`, `findByLabelText`, `findByText`) for accessible element selection
- Use regex patterns in queries for flexible text matching (e.g., `/renewal period/i`)
- Store test data in Cypress aliases using `cy.wrap().as()` for reuse across steps
- Access aliased data with `cy.get('@aliasName')`

## File Naming

- Feature files: `*.feature`
- Step definitions: Same name as feature file with `.mjs` extension (e.g., `Template.feature` → `Template.mjs`)
- All test files use ES modules

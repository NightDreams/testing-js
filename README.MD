# **JavaScript Testing Fundamentals**

## 👨‍💻 Author 

- Developed by [NightDreams](https://github.com/NightDreams)
- Connect on [LinkedIn](https://www.linkedin.com/in/jairneri/)

## 📌 Description

This project demonstrates hands-on application of testing in JavaScript, covering unit, integration, end-to-end (E2E), and UI testing. Through practical exercises, the project teaches how to validate API functionality, simulate data, and ensure robust system behavior from routes to database responses. Emphasis is on building reliable, maintainable, and well-tested code.

---

## 🎯 **Learning Objectives**

- Understand the principles and importance of software testing.
- Apply unit testing to verify individual functions and components.
- Implement integration and E2E tests to ensure API and system reliability.
- Simulate data, mock responses, and test system behavior with Supertest.
- Set up automated testing workflows in GitHub Actions.
- Learn best practices for maintainable and high-quality JavaScript code.

---

## 🛠 **Tech Stack & Tools**

- **Language:** JavaScript (ES6+)
- **Testing Libraries:** Vitest, Jest, React Testing Library, Supertest
- **Techniques:** Mocking, Stubs, Spies, Fake Data Generation
- **Automation / CI/CD:** GitHub Actions
- **Environment:** Node.js, Docker

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="40" alt="jest logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=vite" height="40" alt="vite logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" height="40" alt="eslint logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="40" alt="docker logo"  />
</div>

## ✅ **Techniques and Skills Covered**

✅ Unit testing | Integration testing | E2E testing | UI testing | Mocking | TDD | CI/CD

- Unit testing for JavaScript functions and React components
- Integration testing for APIs and internal services using Supertest
- End-to-End (E2E) testing simulating full system workflows
- UI testing for component rendering and user interactions
- Setup & Teardown configurations for consistent test environments
- Using Assertions / Matchers to validate expected outcomes
- Mocking, stubbing, and spying techniques for isolated tests
- Generating fake data to simulate edge cases
- Test coverage reporting and improvement strategies
- Automating unit and E2E tests with GitHub Actions
- Implementing Test-Driven Development (TDD) principles
- Debugging and troubleshooting failing tests efficiently
- Writing maintainable and modular test code for scalability
- Simulating API responses and error scenarios
- Ensuring reliable system behavior from routes to database **interactions**

# Getting Started

Monorepo Directorys

- /api
- /demos
- /webapp

## 📜 Demos Scripts /demos

- `npm run test` — Run all tests in the `src` directory.
- `npm run test:coverage` — Run tests and generate coverage report.
- `npm run test:verbose` — Run tests in verbose mode.
- `npm run eslint` — Lint all files in the `src` directory.
- `npm run eslint:fix` — Lint and automatically fix issues in `src`.
- `npm run test:demos` — Run all tests in the `demos` directory.
- `npm run eslint:demos` — Lint all files in `demos`.
- `npm run eslint:demos:fix` — Lint and automatically fix issues in `demos`.

## 📜 API Scripts /api

- `npm run start` — Start the API in development or production mode (src/index.js).
- `npm run start:dev` — Start the API in development mode with nodemon and debugging enabled (DEBUG=app:\*).
- `npm run start:prod` — Start the API in production mode (NODE_ENV=production).
- `npm run test` — Run all unit tests for the API.
- `npm run test:e2e` — Run end-to-end (E2E) tests using the E2E Jest configuration (./e2e/jest.config.e2e.json).
- `npm run test:e2e:ci` — Run E2E tests in a CI environment: starts Docker, runs tests, and shuts down Docker.
- `npm run lint` — Lint all API source files with ESLint, max warnings = 0.
- `npm run lint:fix` — Lint and automatically fix ESLint issues.
- `npm run format` — Format all code with Prettier (js, jsx, ts, tsx, json, css, md).
- `npm run docker:up` — Start MongoDB test container using Docker Compose.
- `npm run docker:down` — Stop and remove the MongoDB test container.

## 📜 Webapp Scripts /webapp

- `npm run test ` — Run all Playwright end-to-end (E2E) tests.
- `npm run test:ui` — Open the Playwright Test Runner UI for interactive test execution.
- `npm run test:debug` — Run tests in debug mode for step-by-step inspection.
- `npm run test:report` — Open the Playwright HTML report to review test results.

## 🔑 Environment Variables: `.env` at directoy `/api`.

Create a `.env` file in the root of the `/api` project with the following variables:

```
# MongoDB database name
MONGO_DB_NAME=demo

# MongoDB connection URL
MONGO_URL=mongodb://<username>:<password>@localhost:27017?retryWrites=true&writeConcern=majority

# MongoDB credentials (optional if not in URL)
MONGO_DB_USERNAME=<your-username>
MONGO_DB_PASSWORD=<your-password>

```

## ⚠️ Notes: ENVs for /api

- Replace <username> and <password> with your MongoDB credentials.
- If running via Docker, ensure the container matches these credentials.
- Do **not commit** your `.env` file to GitHub to keep credentials secure.

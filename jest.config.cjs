
// Set env vars for tests to bypass t3-env validation during test startup
const nextJest = require("next/jest.js");
process.env.API_SECRET = "test-secret";
process.env.NEXT_PUBLIC_APP_URL = "http://localhost:3000";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)

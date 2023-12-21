// jest.config.js
module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/test/**/*.tsx', '**/?(*.)+(spec|test).tsx', '**.test.tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  "testEnvironment": "jsdom",
  setupFiles: ['./jest.polyfills.js'],
  testEnvironmentOptions: {
    customExportConditions: ['']
  }
};

export default module.exports

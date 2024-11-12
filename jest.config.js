const config = {
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  testEnvironment: "jsdom",
  collectCoverage: true,
  testTimeout: 5000,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "js"],
  setupFiles: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;

const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "js"],
  setupFiles: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;

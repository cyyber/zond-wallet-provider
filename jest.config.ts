import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "js"],
  setupFiles: ["<rootDir>/jest.setup.ts"],
};

export default config;

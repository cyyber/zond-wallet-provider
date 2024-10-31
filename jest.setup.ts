import { basename, extname, resolve } from "path";
import fs from "fs";
import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextDecoder, TextEncoder });

global.validationTestModules = [];
(() => {
  const kindsDir = resolve(__dirname, "src/superstruct/test/validation");
  const kinds = fs
    .readdirSync(kindsDir)
    .filter((name) => !name.startsWith("."))
    .map((name) => basename(name, extname(name)));

  for (const kind of kinds) {
    const testsDir = resolve(kindsDir, kind);
    const tests = fs
      .readdirSync(testsDir)
      .filter((name) => !name.startsWith("."))
      .map((name) => basename(name, extname(name)));

    for (const name of tests) {
      const testModule = require(resolve(testsDir, name));
      global.validationTestModules.push(testModule);
    }
  }
})();

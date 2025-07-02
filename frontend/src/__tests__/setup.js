import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/vue";
import * as matchers from "@testing-library/jest-dom";

// Extend Vitest's expect method with methods from @testing-library/jest-dom
expect.extend(matchers);

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

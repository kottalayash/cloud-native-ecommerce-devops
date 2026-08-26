const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("./server");

test("product service exports an Express app", () => {
  assert.equal(typeof app, "function");
});

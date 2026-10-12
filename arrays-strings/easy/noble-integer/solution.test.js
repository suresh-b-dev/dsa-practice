const test = require("node:test");
const assert = require("node:assert/strict");
const nobleInteger = require("./solution");

test("returns 1 for the first problem example", () => {
  assert.equal(nobleInteger([3, 2, 1, 3]), 1);
});

test("returns -1 for the second problem example", () => {
  assert.equal(nobleInteger([1, 1, 3, 3]), -1);
});

test("checks the final array position after skipping duplicates", () => {
  assert.equal(nobleInteger([3, 3, 2]), 1);
});

test("handles zero as a noble integer", () => {
  assert.equal(nobleInteger([0, -1]), 1);
});

test("returns -1 when all values are negative", () => {
  assert.equal(nobleInteger([-3, -2, -1]), -1);
});

test("returns -1 for an empty array", () => {
  assert.equal(nobleInteger([]), -1);
});

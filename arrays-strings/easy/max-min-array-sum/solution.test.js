const test = require("node:test");
const assert = require("node:assert/strict");
const min_max = require("./solution");

test("returns the sum of minimum and maximum for the first example", () => {
  // Minimum is -4 and maximum is 5.
  assert.equal(min_max([-2, 1, -4, 5, 3]), 1);
});

test("returns the sum of minimum and maximum for the second example", () => {
  // Minimum is 1 and maximum is 4.
  assert.equal(min_max([1, 3, 4, 1]), 5);
});

test("handles an array containing one value", () => {
  // The same value is both the minimum and maximum.
  assert.equal(min_max([7]), 14);
});

test("handles an array containing only negative values", () => {
  // Minimum is -8 and maximum is -2.
  assert.equal(min_max([-8, -2, -5]), -10);
});

test("handles repeated minimum and maximum values", () => {
  // Repeated extremes do not change the result.
  assert.equal(min_max([4, 1, 4, 1]), 5);
});

test("handles the stated value boundaries", () => {
  // The minimum and maximum cancel each other.
  assert.equal(min_max([-1_000_000_000, 1_000_000_000]), 0);
});

test("returns 0 for an empty array as defensive behavior", () => {
  // Empty arrays are outside the stated problem constraints.
  assert.equal(min_max([]), 0);
});

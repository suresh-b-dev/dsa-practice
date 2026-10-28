const test = require("node:test");
const assert = require("node:assert/strict");
const { firstMissingPositive } = require("./solution");

test("returns 3 for the first example", () => {
  assert.equal(firstMissingPositive([1, 2, 0]), 3);
});

test("returns 2 for the second example", () => {
  assert.equal(firstMissingPositive([3, 4, -1, 1]), 2);
});

test("returns 1 when the array has no positive values", () => {
  assert.equal(firstMissingPositive([-8, -7, -6]), 1);
});

test("returns 1 when the smallest positive value is missing", () => {
  assert.equal(firstMissingPositive([2]), 1);
});

test("returns N plus 1 when all values from 1 through N are present", () => {
  assert.equal(firstMissingPositive([3, 2, 1]), 4);
});

test("ignores duplicate values", () => {
  assert.equal(firstMissingPositive([1, 1, 2, 2]), 3);
});

test("ignores positive values larger than the array length", () => {
  assert.equal(firstMissingPositive([7, 8, 9, 11]), 1);
});

test("handles a single zero", () => {
  assert.equal(firstMissingPositive([0]), 1);
});

test("does not depend on the order of present values", () => {
  assert.equal(firstMissingPositive([2, 1, 4, 5]), 3);
});

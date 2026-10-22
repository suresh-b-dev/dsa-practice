const test = require("node:test");
const assert = require("node:assert/strict");
const addOneNumber = require("./solution");

test("increments the example number", () => {
  assert.deepEqual(addOneNumber([1, 2, 3]), [1, 2, 4]);
});

test("propagates a carry to the previous digit", () => {
  assert.deepEqual(addOneNumber([1, 2, 9]), [1, 3, 0]);
});

test("adds a new leading digit when every digit is nine", () => {
  assert.deepEqual(addOneNumber([9, 9, 9]), [1, 0, 0, 0]);
});

test("removes leading zeroes from the output", () => {
  assert.deepEqual(addOneNumber([0, 1, 0, 1]), [1, 0, 2]);
});

test("handles a single zero digit", () => {
  assert.deepEqual(addOneNumber([0]), [1]);
});

test("handles leading zeroes with a carry across all digits", () => {
  assert.deepEqual(addOneNumber([0, 0, 0, 9]), [1, 0]);
});

test("removes leading zeroes when no carry reaches them", () => {
  assert.deepEqual(addOneNumber([0, 0, 8]), [9]);
});

test("does not mutate the input array", () => {
  const digits = [1, 2, 9];
  addOneNumber(digits);
  assert.deepEqual(digits, [1, 2, 9]);
});

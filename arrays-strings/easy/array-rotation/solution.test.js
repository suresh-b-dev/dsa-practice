const test = require("node:test");
const assert = require("node:assert/strict");
const arrayRotateKtime = require("./solution");

test("rotates the first example right by two positions", () => {
  assert.deepEqual(arrayRotateKtime([1, 2, 3, 4], 2), [3, 4, 1, 2]);
});

test("rotates the second example right by one position", () => {
  assert.deepEqual(arrayRotateKtime([2, 5, 6], 1), [6, 2, 5]);
});

test("returns the original order when K equals the array length", () => {
  assert.deepEqual(arrayRotateKtime([1, 2, 3, 4], 4), [1, 2, 3, 4]);
});

test("handles K greater than the array length", () => {
  assert.deepEqual(arrayRotateKtime([1, 2, 3], 5), [2, 3, 1]);
});

test("handles a single-element array", () => {
  assert.deepEqual(arrayRotateKtime([7], 9), [7]);
});

test("handles a larger rotation count", () => {
  assert.deepEqual(arrayRotateKtime([4, 8, 12, 16, 20], 12), [16, 20, 4, 8, 12]);
});

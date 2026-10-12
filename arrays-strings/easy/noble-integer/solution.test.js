const test = require("node:test");
const assert = require("node:assert/strict");
const nobleInteger = require("./solution");

test("returns 1 when a value has exactly that many greater elements", () => {
  assert.equal(nobleInteger([3, 2, 1, 3]), 1);
});

test("returns -1 when no value satisfies the condition", () => {
  assert.equal(nobleInteger([1, 1, 3, 3]), -1);
});

test("does not count equal duplicates as greater", () => {
  assert.equal(nobleInteger([2, 2]), -1);
});

test("supports zero as a noble integer", () => {
  assert.equal(nobleInteger([0, -1]), 1);
});

test("rejects negative candidates", () => {
  assert.equal(nobleInteger([-3, -2, -1]), -1);
});

test("handles a candidate at the start of descending order", () => {
  assert.equal(nobleInteger([0, -2, -4]), 1);
});

test("does not mutate the input array", () => {
  const input = [3, 2, 1, 3];
  nobleInteger(input);
  assert.deepEqual(input, [3, 2, 1, 3]);
});

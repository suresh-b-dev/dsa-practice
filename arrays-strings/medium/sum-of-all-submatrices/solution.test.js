const test = require("node:test");
const assert = require("node:assert/strict");
const solve = require("./solution");

test("returns 16 for a 2 by 2 matrix of ones", () => {
  assert.equal(
    solve([
      [1, 1],
      [1, 1],
    ]),
    16,
  );
});

test("returns 40 for the second example", () => {
  assert.equal(
    solve([
      [1, 2],
      [3, 4],
    ]),
    40,
  );
});

test("handles a single-cell matrix", () => {
  assert.equal(solve([[7]]), 7);
});

test("handles a matrix with one row", () => {
  assert.equal(solve([[1, 2, 3]]), 20);
});

test("returns zero for a matrix of zeroes", () => {
  assert.equal(
    solve([
      [0, 0],
      [0, 0],
    ]),
    0,
  );
});

test("counts only non-zero cell contributions", () => {
  assert.equal(
    solve([
      [0, 1],
      [2, 0],
    ]),
    12,
  );
});

test("returns 100 for a 3 by 3 matrix of ones", () => {
  assert.equal(
    solve([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]),
    100,
  );
});

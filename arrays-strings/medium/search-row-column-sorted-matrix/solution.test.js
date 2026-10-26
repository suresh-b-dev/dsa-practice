const test = require("node:test");
const assert = require("node:assert/strict");
const solve = require("./solution");

test("returns the encoded position for the first example", () => {
  assert.equal(
    solve(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      2,
    ),
    1011,
  );
});

test("returns the smallest encoded position when the target appears more than once", () => {
  assert.equal(
    solve(
      [
        [1, 2],
        [3, 3],
      ],
      3,
    ),
    2019,
  );
});

test("returns -1 when the target is absent", () => {
  assert.equal(
    solve(
      [
        [1, 2],
        [3, 4],
      ],
      5,
    ),
    -1,
  );
});

test("returns -1 when the target is smaller than every matrix value", () => {
  assert.equal(
    solve(
      [
        [5, 6],
        [7, 8],
      ],
      1,
    ),
    -1,
  );
});

test("handles a one-cell matrix", () => {
  assert.equal(solve([[-4]], -4), 1010);
});

test("chooses the leftmost matching column in the earliest matching row", () => {
  assert.equal(
    solve(
      [
        [2, 2, 2],
        [3, 4, 5],
      ],
      2,
    ),
    1010,
  );
});

test("finds the smallest encoded position among matches in multiple rows and columns", () => {
  assert.equal(
    solve(
      [
        [1, 2, 2],
        [2, 2, 3],
        [2, 3, 4],
      ],
      2,
    ),
    1011,
  );
});

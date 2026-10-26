/**
 * Find B in a matrix whose rows and columns are sorted in non-decreasing order.
 * Returns the smallest 1-based encoded position (row * 1009 + column), or -1.
 *
 * Time complexity: O(N + M)
 * Extra space: O(1)
 *
 * @param {number[][]} A
 * @param {number} B
 * @returns {number}
 */
function solve(A, B) {
  if (A.length === 0 || A[0].length === 0) {
    return -1;
  }

  let row = 0;
  let column = A[0].length - 1;
  let answer = Infinity;

  // Start at the top-right corner and eliminate one row or column per step.
  while (row < A.length && column >= 0) {
    const value = A[row][column];

    if (value === B) {
      // Convert both zero-based JavaScript indexes to the required 1-based
      // row and column numbers before calculating the encoded position.
      const position = (row + 1) * 1009 + (column + 1);
      answer = Math.min(answer, position);

      // Search left for an earlier matching column in this same row.
      column -= 1;
    } else if (value > B) {
      // Everything below this cell in the same column is at least as large.
      column -= 1;
    } else {
      // Everything left of this cell in the same row is at most as large.
      row += 1;
    }
  }

  return answer === Infinity ? -1 : answer;
}

module.exports = solve;

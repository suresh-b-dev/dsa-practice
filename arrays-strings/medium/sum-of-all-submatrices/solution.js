/**
 * Return the sum of every possible submatrix of A.
 *
 * Each cell contributes its value once for every submatrix containing it.
 * Time complexity: O(N * M)
 * Extra space: O(1)
 *
 * @param {number[][]} A
 * @returns {number}
 */
function solve(A) {
  const N = A.length;
  if (N === 0) {
    return 0;
  }

  const M = A[0].length;
  let answer = 0;

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      // Choose the top-left corner in (i + 1) * (j + 1) ways
      // and the bottom-right corner in (N - i) * (M - j) ways.
      const frequency = (i + 1) * (j + 1) * (N - i) * (M - j);
      answer += A[i][j] * frequency;
    }
  }

  return answer;
}

module.exports = solve;

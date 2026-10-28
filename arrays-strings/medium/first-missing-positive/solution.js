/**
 * Return the smallest positive integer missing from A.
 *
 * The input array is modified in place while values are used as presence markers.
 * Time complexity: O(N)
 * Extra space: O(1)
 *
 * @param {number[]} A
 * @returns {number}
 */
module.exports = {
  firstMissingPositive: function (A) {
    const N = A.length;
    const outOfRange = N + 2;

    // Replace values that cannot help identify an answer in [1, N].
    for (let i = 0; i < N; i += 1) {
      if (A[i] <= 0) {
        A[i] = outOfRange;
      }
    }

    // For each value x in [1, N], mark index x - 1 as seen by negating it.
    // Math.abs is needed because earlier iterations may already have marked
    // the current array entry as negative.
    for (let i = 0; i < N; i += 1) {
      const value = Math.abs(A[i]);

      if (value >= 1 && value <= N) {
        const index = value - 1;
        if (A[index] > 0) {
          A[index] = -A[index];
        }
      }
    }

    // The first index still positive represents the first missing value.
    for (let i = 0; i < N; i += 1) {
      if (A[i] > 0) {
        return i + 1;
      }
    }

    // Every value from 1 through N was present.
    return N + 1;
  },
};

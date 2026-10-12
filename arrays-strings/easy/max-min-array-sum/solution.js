/**
 * Return the sum of the minimum and maximum values in the array.
 *
 * The problem guarantees at least one value. The empty-array check is kept
 * from my version as defensive behavior and returns 0 when A is empty.
 *
 * Time complexity: O(N), where N is the array length.
 * Extra space: O(1).
 *
 * @param {number[]} A
 * @returns {number}
 */
const min_max = (A) => {
  // The problem input is non-empty, so the first value is a valid starting
  // point for both extremes. This also works when the array has one value.
  if (A.length === 0) {
    return 0;
  }

  let min = A[0];
  let max = A[0];

  // Start at index 1 because A[0] initialized both min and max.
  for (let i = 1; i < A.length; i += 1) {
    // Update the minimum only when this value is smaller than the current one.
    if (A[i] < min) {
      min = A[i];
    // Otherwise, check whether this value is larger than the current maximum.
    // Both conditions cannot be true for the same value while min <= max.
    } else if (A[i] > max) {
      max = A[i];
    }
  }

  // The required result is the sum of the two extremes.
  return min + max;
};

module.exports = min_max;

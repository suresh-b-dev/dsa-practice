/**
 * Return 1 when an array value equals the number of values strictly greater
 * than it; otherwise return -1.
 *
 * This follows my sorted-array plan. Sorting changes the input array.
 * Time: O(n log n) for sorting and O(n) for the scan.
 *
 * @param {number[]} A
 * @returns {1 | -1}
 */
function nobleInteger(A) {
  // Sort from largest to smallest so the index of a distinct value's
  // first occurrence is the count of values strictly greater than it.
  A.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i += 1) {
    // Equal values are not strictly greater, so inspect only the first
    // occurrence of each value.
    if (i > 0 && A[i - 1] === A[i]) {
      continue;
    }

    if (A[i] === i) {
      return 1;
    }
  }

  return -1;
}

module.exports = nobleInteger;

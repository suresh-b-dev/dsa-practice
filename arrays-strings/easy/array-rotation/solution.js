/**
 * Rotate an integer array to the right by K positions.
 *
 * The input constraints guarantee a non-empty array and a positive K.
 * The array is modified in place and the same array is returned.
 *
 * Time complexity: O(N), because the three reversals each scan at most N items.
 * Extra space: O(1), because the reversals use only temporary values.
 *
 * @param {number[]} A
 * @param {number} K
 * @returns {number[]}
 */
const arrayRotateKtime = (A, K) => {
  // Rotating by the array length returns to the same arrangement, so
  // reduce large rotation counts to the number of effective rotations.
  const rotate = K % A.length;

  if (rotate !== 0) {
    // Reverse all values, then reverse each section to produce a right rotation.
    rotateArray(A);
    reverseArray(A, 0, rotate - 1);
    reverseArray(A, rotate, A.length - 1);
  }

  return A;
};

/**
 * Reverse the entire array in place.
 * @param {number[]} A
 * @returns {number[]}
 */
function rotateArray(A) {
  // Swap values from the two ends, moving toward the center.
  for (let i = 0, j = A.length - 1; i < A.length / 2; i += 1, j -= 1) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  }

  return A;
}

/**
 * Reverse the inclusive range from si to ei in place.
 * @param {number[]} A
 * @param {number} si
 * @param {number} ei
 * @returns {number[]}
 */
function reverseArray(A, si, ei) {
  // Swap the range's endpoints until the pointers meet or cross.
  for (let i = si, j = ei; i < j; i += 1, j -= 1) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  }

  return A;
}

module.exports = arrayRotateKtime;

/**
 * Add one to a non-negative integer represented by its digits.
 *
 * Leading zeroes in the input are allowed; leading zeroes are removed
 * from the returned digit array.
 *
 * Time complexity: O(N)
 * Space complexity: O(N) for the result array.
 *
 * @param {number[]} A
 * @returns {number[]}
 */
const addOneNumber = (A) => {
  const result = [];
  let carry = 1; // The value being added is one.

  // Start at the least significant digit and propagate any carry leftward.
  for (let i = A.length - 1; i >= 0; i -= 1) {
    const sum = A[i] + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  // If every input digit was 9, one extra most-significant digit is needed.
  if (carry > 0) {
    result.push(carry);
  }

  // Digits were collected right-to-left; restore the normal order.
  result.reverse();

  // Remove leading zeroes, while retaining one digit for the value zero.
  let firstNonZero = 0;
  while (firstNonZero < result.length - 1 && result[firstNonZero] === 0) {
    firstNonZero += 1;
  }

  return result.slice(firstNonZero);
};

module.exports = addOneNumber;

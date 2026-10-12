/**
 * Return 1 if some value p has exactly p array values strictly greater than it.
 * Otherwise return -1.
 *
 * @param {number[]} A
 * @returns {1 | -1}
 */
function nobleInteger(A) {
  const sorted = [...A].sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i += 1) {
    // Only the first occurrence of a value represents the count of values
    // strictly greater than it. Equal values are not greater than each other.
    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }

    if (sorted[i] === i) {
      return 1;
    }
  }

  return -1;
}

module.exports = nobleInteger;

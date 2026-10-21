module.exports = {
  // @param A: number of beggars
  // @param B: donations in the form [startPosition, endPosition, amount]
  // Positions in B are one-based, as in the problem statement.
  // @return the final amount in each beggar's pot
  solve: function (A, B) {
    const amounts = new Array(A).fill(0);

    for (let i = 0; i < B.length; i++) {
      const startPosition = B[i][0];
      const endPosition = B[i][1];
      const donation = B[i][2];

      // JavaScript arrays are zero-based, so position 1 maps to index 0.
      amounts[startPosition - 1] += donation;

      // Cancel the donation immediately after the inclusive end position.
      // endPosition is also the zero-based index just after that range.
      if (endPosition < A) {
        amounts[endPosition] -= donation;
      }
    }

    // Prefix sums apply each recorded donation across its full range.
    for (let i = 1; i < A; i++) {
      amounts[i] += amounts[i - 1];
    }

    return amounts;
  }
};

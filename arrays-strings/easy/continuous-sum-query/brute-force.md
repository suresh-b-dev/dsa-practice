# Brute-force approach

1. Create an array of A zeros, one for each beggar.
2. Process each donation [L, R, P] in B. L and R are one-based beggar positions.
3. For that donation, visit each position from L through R, inclusive. In JavaScript, update array index position - 1 by adding P.
4. Return the resulting amounts. Array index 0 stores beggar 1's total, index 1 stores beggar 2's total, and so on.

## Complexity

Let Q be the number of donations and A be the number of beggars.

- **Time:** O(A + sum of all donated range lengths). In the worst case, this is O(A + Q × A), commonly written as O(Q × A) when Q is nonzero.
- **Space:** O(A) for the result array, plus O(1) additional working space.

This is the direct approach from my notes. The optimized solution is documented separately.

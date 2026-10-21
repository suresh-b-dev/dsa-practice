# Brute-force approach

1. Create an array of A zeros, one for each beggar.
2. Process each donation [L, R, P] in B.
3. For that donation, add P to each beggar from L through R, inclusive.
4. Return the resulting amounts.

The problem uses 1-based beggar positions, while a JavaScript array uses 0-based indexes. Therefore, the first affected array index is L - 1 and the last affected index is R - 1.

## Complexity

Let Q be the number of donations and A be the number of beggars.

- **Time:** O(A + sum of all donated range lengths). In the worst case, this is O(A + Q × A), commonly written as O(Q × A) when Q is nonzero.
- **Space:** O(A) for the result array, plus O(1) additional working space.

This is the direct approach from my notes. I will write my own implementation separately.

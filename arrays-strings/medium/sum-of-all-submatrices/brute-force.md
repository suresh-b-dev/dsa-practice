# Brute-Force Approach

1. Choose a top row and left column for a submatrix.
2. Choose a bottom row and right column that are at or below and to the right of the starting position.
3. Visit every cell inside that submatrix and add its value to a running total.
4. Repeat for every possible choice of top, left, bottom, and right boundaries.
5. Return the accumulated sum.

For an N x M matrix, there are O(N^2 * M^2) possible submatrices. Summing the cells inside each one takes up to O(N * M), giving a worst-case time complexity of O(N^3 * M^3). For the square N x N matrix in the problem, this is O(N^6).

## Complexity

- **Time:** O(N^3 * M^3) worst case; O(N^6) for an N x N matrix.
- **Extra space:** O(1) if each submatrix's cells are accumulated directly into the running total.

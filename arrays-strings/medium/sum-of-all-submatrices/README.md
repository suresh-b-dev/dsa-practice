# Sum of All Submatrices

- **Topic:** Matrices, contribution technique
- **Difficulty:** Medium
- **Status:** Solution and tests added

Given a square matrix, return the sum of the values of every possible contiguous submatrix.

## Files

- [Brute-force approach](brute-force.md)
- [My plan](plan.md)
- [JavaScript solution](solution.js)
- [Expected test cases](test-cases.md)
- [Automated tests](solution.test.js)

## Visualizing one cell's contribution

Consider the center cell A[1][1] in a 3 x 3 matrix (indexes shown here are zero-based):

| A[0][0] | A[0][1] | A[0][2] |
|---|---|---|
| A[1][0] | **A[1][1]** | A[1][2] |
| A[2][0] | A[2][1] | A[2][2] |

A submatrix containing the center can start at any of the four cells in the upper-left 2 x 2 area. It can end at any of the four cells in the lower-right 2 x 2 area. That gives 4 * 4 = 16 submatrices containing the center cell.

In general, A[i][j] appears in (i + 1) * (j + 1) * (N - i) * (M - j) submatrices. Multiply that frequency by the cell value and add it to the total.

## Complexity

The contribution solution processes each cell once: O(N * M) time and O(1) extra space. The brute-force approach is documented separately.

## Run the tests

From the repository root:

```sh
node --test arrays-strings/medium/sum-of-all-submatrices/solution.test.js
```

From this problem's folder:

```sh
node --test solution.test.js
```

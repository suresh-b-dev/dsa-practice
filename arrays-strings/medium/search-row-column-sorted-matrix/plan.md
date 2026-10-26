# Plan: Search a Row-Wise and Column-Wise Sorted Matrix

1. If the matrix has no rows or its first row has no columns, return -1.
2. Start at the top-right cell.
3. Compare the current value with B:
   - If it is greater than B, move one column left. All values below it in that column are at least as large, so that column cannot contain B.
   - If it is less than B, move one row down. All values to its left in that row are at most as large, so that row cannot contain B.
   - If it equals B, calculate the position using the required 1-based row and column numbers: (row * 1009 + column). Save the smallest position seen, then move left to look for an earlier matching column in the same row.
4. Continue while the row and column indexes remain inside the matrix.
5. Return the smallest saved position. If no match was found, return -1.

The code uses zero-based JavaScript indexes internally. It adds 1 to the row and column before calculating the answer, as required by the problem.

## Why the top-right walk is efficient

Each comparison removes either the current row or the current column from further consideration. Therefore the walk takes at most N + M steps.

## Complexity

- **Time:** O(N + M)
- **Extra space:** O(1)

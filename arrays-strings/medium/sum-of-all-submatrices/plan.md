# Plan: Contribution of Each Cell

1. Initialize the total answer to 0.
2. Visit every cell A[i][j].
3. Count the choices for a submatrix's top-left corner that include this cell:
   - There are i + 1 choices for the row.
   - There are j + 1 choices for the column.
   - Together, there are (i + 1) * (j + 1) choices.
4. Count the choices for the bottom-right corner:
   - There are N - i choices for the row.
   - There are M - j choices for the column.
   - Together, there are (N - i) * (M - j) choices.
5. Multiply the two counts to get how many submatrices contain A[i][j]:
   (i + 1) * (j + 1) * (N - i) * (M - j).
6. Add A[i][j] multiplied by this frequency to the answer.
7. Return the answer after processing all cells.

The problem uses an N x N matrix, but the formula also works for an N x M matrix.

## Complexity

- **Time:** O(N * M), because each matrix cell is processed once.
- **Extra space:** O(1).

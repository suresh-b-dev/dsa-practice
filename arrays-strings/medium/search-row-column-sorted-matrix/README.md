# Search in a Row-Wise and Column-Wise Sorted Matrix

- **Topic:** Matrices
- **Difficulty:** Medium
- **Indexing:** The answer uses 1-based row and column numbers.
- **Status:** Solution and tests added

Given a matrix whose rows and columns are sorted in non-decreasing order, find B. Return the smallest position encoded as row * 1009 + column, or -1 if B is absent.

## Files

- [Brute-force approach](brute-force.md)
- [My plan](plan.md)
- [JavaScript solution](solution.js)
- [Expected test cases](test-cases.md)
- [Automated tests](solution.test.js)

## Visual walkthrough

For this matrix and target B = 5, begin at the top-right value. A downward arrow means the current value is smaller than 5, so move down. A left arrow means the current value is greater than 5, or that a match was found and we are checking for an earlier matching column.

| Row \ Column | 1 | 2 | 3 |
|---:|---:|---:|---:|
| 1 | 1 | 2 | **3 ↓** |
| 2 | **4 ↓** | **5 ←** | **6 ←** |
| 3 | **7 ← exit** | 8 | 9 |

Walk: 3 < 5, so move down to 6. Since 6 > 5, move left to 5 and record its position. Move left again to check for an earlier match in the same row; 4 < 5, so move down to 7. Since 7 > 5, move left and leave the matrix. The answer is 2 * 1009 + 2 = 2020.

This staircase walk discards a complete row or column at each step. On a match, moving left checks for a smaller column number in that row.

## Complexity

The top-right search runs in O(N + M) time and uses O(1) extra space. The brute-force scan takes O(N * M) time.

## Run the tests

From the repository root:

```sh
node --test arrays-strings/medium/search-row-column-sorted-matrix/solution.test.js
```

From this problem's folder:

```sh
node --test solution.test.js
```

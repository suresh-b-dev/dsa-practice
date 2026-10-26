# Brute-Force Approach

1. Visit every cell in the matrix.
2. When a cell equals B, calculate its position with the problem's 1-based row and column numbers: (row * 1009 + column).
3. Keep the smallest matching position.
4. Return the smallest position found, or -1 if no cell contains B.

Checking every cell ensures that duplicates are handled and the smallest encoded position is selected.

## Complexity

- **Time:** O(N × M), since every matrix cell may need to be checked.
- **Extra space:** O(1), because only the current and smallest positions need to be stored.

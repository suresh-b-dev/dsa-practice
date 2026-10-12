# My plan

1. Calculate the effective rotation count by taking K modulo the array length. This avoids repeating complete cycles, because rotating an array by its full length returns it to the original order.
2. Reverse the entire array.
3. Reverse the first section, from index 0 through index K - 1, where K is now the effective rotation count.
4. Reverse the remaining section, from index K through the last index.
5. Return the array.

If the effective rotation count is zero, the array is already in the correct order and no reversals are needed.

## Complexity

- **Time:** O(N), because the full array and its two sections are each reversed at most once.
- **Extra space:** O(1), because reversals are performed in place using swaps.

## Example

For [1, 2, 3, 4] with an effective rotation count of 2:

- Reverse the whole array: [4, 3, 2, 1]
- Reverse the first section: [3, 4, 2, 1]
- Reverse the remaining section: [3, 4, 1, 2]

This produces the required right rotation.

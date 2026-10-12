# My plan

1. Sort the array in descending order.
2. If the current value is the same as the previous value, continue to the next position.
3. Otherwise, compare the current value with its index. If they are equal, return 1.
4. If the loop finishes without a match, return -1.

## Review of my plan

This approach is correct when the array is sorted in descending order and the index starts at zero.

Skipping duplicates is essential. At the first occurrence of a distinct value, every preceding value is strictly greater, so the index equals the number of values greater than the current value. Equal duplicates must not be counted as greater.

For the first position there is no previous value to compare with; treat it as the first occurrence and perform the equality check. The loop must inspect every position, including the final one.

## Complexity

Sorting takes O(n log n) time and the scan takes O(n), so the overall time is O(n log n).

The implementation sorts the original array in place, so it reorders the input. Additional space used internally by the language's sort operation can vary.

## Implementation status

I supplied the solution. Its core sorting, duplicate-skip, and value-to-index comparison follow this plan. The function is named nobleInteger and has comments explaining the duplicate handling. See the test instructions in README.md.

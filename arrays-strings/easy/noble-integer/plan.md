# My plan

1. Sort the array in descending order.
2. If the current value is the same as the previous value, continue to the next position.
3. Otherwise, compare the current value with its index. If they are equal, return 1.
4. If the loop finishes without a match, return -1.

## Review of my plan

This approach is correct when the array is sorted in descending order and the index starts at zero.

Skipping duplicates is essential. At the first occurrence of a distinct value, every preceding value is strictly greater, so the index equals the number of values greater than the current value. Equal duplicates must not be counted as greater.

For the first position there is no previous value to compare with; treat it as the first occurrence and perform the equality check.

## Complexity

Sorting takes O(n log n) time and the scan takes O(n), so the overall time is O(n log n).

If I sort the original array, the input will be reordered. If I keep the original unchanged by making a copy, that copy uses O(n) extra space. Extra space used internally by a language's sort operation can vary.

## Next step

Write my own implementation from this plan, then check it against both examples and cases with duplicate values. Add solution code only after my implementation has been reviewed and I confirm the final version.

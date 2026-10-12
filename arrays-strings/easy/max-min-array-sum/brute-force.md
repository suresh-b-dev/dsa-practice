# Approach (single-pass scan)

> This is not brute force in the usual sense. It scans the array once, so it is already an optimal approach for this problem.

1. Initialize both the minimum and maximum using the first array element.
2. Start scanning from the second element and continue through the end of the array.
3. If the current element is smaller than the minimum, update the minimum.
4. If the current element is larger than the maximum, update the maximum.
5. After the scan, return the sum of the minimum and maximum.

The constraints guarantee that the array has at least one element, so using its first element for initialization is valid.

## Complexity

- **Time:** O(N), because each remaining element is checked once.
- **Extra space:** O(1), because only the minimum and maximum values are stored.

## Implementation note

The solution is intentionally left for me to add after I write it.

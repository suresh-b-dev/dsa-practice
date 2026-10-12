# My brute-force approach

## My idea

1. Iterate through the array and take the current element as the candidate p.
2. Initialize a counter to zero.
3. Scan the array and compare every element with p.
4. Increase the counter whenever an element is strictly greater than p.
5. After the scan, if the counter equals p, return 1.
6. If no candidate works, return -1.

The candidate itself does not need to be skipped in the inner scan: it is not greater than itself. Equal duplicates also do not count because the condition is strictly greater.

## Complexity

- **Time:** O(n²), because each of the n candidates may be compared with all n array values.
- **Extra space:** O(1), because only a candidate and a counter are needed.

## Small implementation detail to remember

With zero-based indexing, visit candidate positions from 0 through n - 1 and scan all positions from 0 through n - 1. This makes sure the last array element is also considered as a candidate and every value is included in the count.

## Suggestion for my next attempt

Before optimizing, explain why the comparison must be strictly greater, especially when the array has duplicates. Then look for a way to avoid recounting greater values from scratch for every candidate. Try to derive the optimized approach yourself and add it to plan.md before writing code.

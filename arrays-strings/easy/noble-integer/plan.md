# Plan and interview explanation

## Key observation

If the values are sorted in **descending** order, every value before a position is greater than or equal to the value at that position. At the **first position of a distinct value**, all earlier values are strictly greater, while equal duplicates are not earlier in that group's first position count.

So, for a distinct candidate at index `i` (the first occurrence in descending order):

```text
number of values strictly greater than candidate = i
```

The candidate is noble exactly when its value equals that count: `sorted[i] === i`.

Checking only the first occurrence of each value matters. For example, in `[3, 3, 2]`, the first `3` is at index `0`, but there are zero values strictly greater than `3`; the second `3` must not be treated as having one greater value.

## Optimized plan

1. Make a copy of the input so sorting does not change the caller's array.
2. Sort the copy numerically in descending order. JavaScript's default sort is lexicographic, so provide a numeric comparator.
3. Visit each index from left to right.
4. Skip a value if it is equal to the previous value; only inspect the first occurrence of each distinct value.
5. At a first occurrence at index `i`, compare the value with `i`.
6. If they are equal, return `1`; if the scan finishes, return `-1`.

Negative values cannot satisfy the condition because a count cannot be negative. No special-case code is needed; the equality check naturally rejects them.

## Correctness argument

At the first occurrence of a distinct value `p` in descending order, every element before it is strictly greater than `p), and every element at or after it is less than or equal to `p`. Therefore exactly `i` elements are greater than `p`. The algorithm returns `1` exactly when `p = i`, which is the required condition. It checks one such first position for every distinct value, so if any qualifying array value exists it will be found.

## Complexity

- **Time:** `O(n log n)` for sorting, then `O(n)` for the scan; overall `O(n log n)`.
- **Extra space:** `O(n)` for the copied array. Sorting space used internally by JavaScript depends on the runtime.

If mutating the input is allowed, sorting it directly avoids the explicit copy, but state that trade-off before doing so in an interview.

## Interview-ready explanation

> “A direct solution checks each element as a candidate and scans the full array to count values strictly greater than it. That is correct, but takes O(n²), which is not practical for the maximum input size. I’ll sort a copy in descending numeric order. At the first position of each distinct value, the index equals the number of elements strictly greater than that value. I compare the value with its index and return 1 if they match; otherwise I continue and return -1 if no value matches. I skip duplicate values after their first occurrence so equal elements are not incorrectly counted as greater. Sorting takes O(n log n), the scan is O(n), and the copied array uses O(n) extra space.”

## Questions to be ready for

- **Why skip duplicates?** Equal values are not strictly greater; checking only each value's first position makes the index count exactly the strictly greater elements.
- **Why numeric comparator?** JavaScript's default `Array.sort()` compares values as strings, which gives incorrect order for numbers such as `2` and `10`.
- **Does sorting change the input?** This solution sorts a copy, preserving the original array at the cost of O(n) extra space.
- **Can we make it O(n)?** Not with this simple comparison-sort approach. With a small bounded value range, frequency counting could be considered, but values here range from `-10⁸` to `10⁸`, so a direct frequency array is impractical.
- **What edge cases matter?** Duplicates, negative values, zero, a candidate at the start, and no valid candidate.

## Dry run

Input: `[3, 2, 1, 3]`

Sorted descending: `[3, 3, 2, 1]`

- Index 0: `3) is the first `3`; `3 !== 0`.
- Index 1: skip duplicate `3`.
- Index 2: `2) is distinct; `2 === 2`, so return `1`.

Input: `[1, 1, 3, 3]`

Sorted descending: `[3, 3, 1, 1]`

- Index 0: `3 !== 0`.
- Index 1: skip duplicate `3`.
- Index 2: `1 !== 2`.
- Index 3: skip duplicate `1`.
- No match, so return `-1`.

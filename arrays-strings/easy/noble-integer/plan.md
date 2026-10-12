# Plan and interview explanation

## Key observation

Sort the values in **descending** order. At the first position of each distinct value, every value before it is strictly greater. Therefore, that position tells us exactly how many array values are greater than the candidate.

For a distinct candidate at index `i):

```text
number of values strictly greater than candidate = i
```

The candidate is noble when `sorted[i] === i`.

We must inspect only the first occurrence of each value. For example, in `[3, 3, 2]`, the first `3` is at index `0` and has zero greater values. We must not inspect the second `3` as though one value were greater; it is equal, not greater.

## Optimized plan

1. Copy the input so sorting does not change the caller's array.
2. Sort the copy numerically in descending order. JavaScript's default sort is lexicographic, so provide a numeric comparator.
3. Visit each index from left to right.
4. Skip a value if it is equal to the previous value; only inspect the first occurrence of each distinct value.
5. At a first occurrence at index `i`, compare the value with `i`.
6. If they are equal, return `1`. If the scan finishes, return `-1`.

Negative values cannot satisfy the condition because a count cannot be negative. The equality check rejects them without a special case.

## Correctness argument

At the first occurrence of a distinct value `p` in descending order, every element before it is strictly greater than `p`, and every element at or after it is less than or equal to `p`. So exactly `i` elements are greater than `p`. The algorithm returns `1` exactly when `p = i), which is the required condition. It checks one first position for every distinct value, so it finds any valid candidate.

## Complexity

- **Time:** `O(n log n)` for sorting, followed by an `O(n)` scan; overall `O(n log n)`.
- **Extra space:** `O(n)` for the copied array. Additional space used internally by JavaScript's sort can vary by runtime.

If mutating the input is allowed, sort it directly to avoid the explicit copy; explain that trade-off before choosing it in an interview.

## Interview-ready explanation

> “A direct solution checks each element as a candidate and scans the full array to count values strictly greater than it. That is correct, but takes O(n²), which is impractical for the maximum input size. I’ll sort a copy in descending numeric order. At the first position of each distinct value, the index equals the number of elements strictly greater than that value. I compare the value with its index and return 1 if they match; otherwise, I continue and return -1 if no value matches. I skip duplicate values after their first occurrence so equal elements are not counted as greater. Sorting takes O(n log n), the scan is O(n), and the copied array uses O(n) extra space.”

## Questions to be ready for

- **Why skip duplicates?** Equal values are not strictly greater. Checking only the first occurrence makes the index equal the number of strictly greater values.
- **Why use a numeric comparator?** JavaScript's default `Array.sort()` compares values as strings, which can give the wrong order for numbers such as `2` and `10`.
- **Does sorting change the input?** This solution sorts a copy, preserving the original array at the cost of `O(n)` extra space.
- **Can we make it `O(n)`?** Not with this comparison-sort approach. A frequency array is impractical because values range from `-10^8` to `10^8`.
- **Which edge cases matter?** Duplicates, negative values, zero, a candidate at the start, and no valid candidate.

## Dry run 1

Input: `[3, 2, 1, 3]`

Sorted descending: `[3, 3, 2, 1]`

- Index 0: `3) is the first `3`; `3 !== 0`.
- Index 1: skip the duplicate `3`.
- Index 2: `2) is distinct and `2 === 2`, so return `1`.

## Dry run 2

Input: `[1, 1, 3, 3]`

Sorted descending: `[3, 3, 1, 1]`

- Index 0: `3 !== 0`.
- Index 1: skip the duplicate `3`.
- Index 2: `1 !== 2`.
- Index 3: skip the duplicate `1`.
- No match, so return `-1`.

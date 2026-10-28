# Plan: Mark Present Values In Place

The smallest missing positive must be in the range 1 through N + 1 for an array of length N. If every value from 1 through N is present, the answer is N + 1.

1. Let N be the array length. Replace every zero or negative value with N + 2. These values cannot be a useful answer, and the sentinel is outside the range 1 through N.
2. Scan the array again. For each current value, take its absolute value because an earlier step may have made it negative.
3. If the absolute value x is between 1 and N, use index x - 1 as a marker for x. Negate the value at that index if it is still positive.
4. Scan from index 0 upward. The first positive value means its index + 1 was never marked, so return index + 1.
5. If every array entry is negative, all values 1 through N appeared. Return N + 1.

## Worked example

Input: [3, 4, -1, 1], N = 4

**Pass 1 — replace non-positive values with N + 2 = 6:**

[3, 4, 6, 1]

**Pass 2 — mark each in-range value x at index x - 1:**

- Value 3 marks index 2: [3, 4, -6, 1]
- Value 4 marks index 3: [3, 4, -6, -1]
- Value 6 is outside 1..N, so skip it.
- Value 1 marks index 0: [-3, 4, -6, -1]

**Pass 3 — find the first positive entry:**

Index 1 is the first positive entry, so return 1 + 1 = 2.

## Complexity and mutation

- **Time:** O(N), using three linear passes.
- **Extra space:** O(1).
- **Mutation:** The algorithm changes A in place while marking values.

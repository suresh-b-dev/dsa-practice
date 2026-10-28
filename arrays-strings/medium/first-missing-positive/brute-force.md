# Brute-Force Approach

1. Create a boolean array of length N + 2. Its indexes cover 0 through N + 1.
2. Scan A. For each positive value x where x <= N + 1, mark seen[x] as true.
3. Scan from 1 through N + 1. Return the first value whose seen entry is false.
4. If needed, return N + 1 after the scan; at least one value in 1..N+1 must be missing.

Zero and negative values do not affect the answer because the task asks for a positive integer.

## Complexity

- **Time:** O(N), for the input and presence-array scans.
- **Extra space:** O(N) for the boolean array.

This uses linear extra space, so it does not meet the problem's constant-space requirement.

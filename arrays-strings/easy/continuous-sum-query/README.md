# Q4. Continuous Sum Query

## Brute Force Approach

1. Create an array of size `A`, initialized with `0`, to represent each beggar's pot.
2. Iterate through each donation `[L, R, P]` in `B`.
3. For each donation, iterate from beggar `L` to `R` and add `P` to each beggar's pot.
4. Return the final array.

## Complexity Analysis

- **Time Complexity:** `O(Q × N)` in the worst case, where `Q = B.length` is the number of donations and `N = A` is the number of beggars.
- **Space Complexity:** `O(N)` for the result array.

## Solution

TODO — implement independently.

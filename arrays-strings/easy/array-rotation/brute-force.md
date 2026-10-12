# Initial repeated-rotation approach

## Idea

Repeat a one-position right rotation the required number of times. For each rotation, save the last element, shift the other elements one position to the right, then place the saved element at the beginning.

## Complexity

- Without reducing K first, the time is O(N × K).
- If K is reduced to r = K modulo N, the time is O(N × r), with O(N²) worst-case time.
- Extra space is O(1) when each rotation is done in place with one temporary value.

Because K can be as large as 10^9, reduce it modulo N before repeating rotations. This repeated-shifting approach can still take O(N²) time in the worst case.

## Final approach

My submitted solution uses three in-place reversals instead of repeatedly shifting the array. See the approach and complexity in [README.md](README.md), the [solution](solution.js), and [test cases](solution.test.js).

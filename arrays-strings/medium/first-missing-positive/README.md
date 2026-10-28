# First Missing Integer

- **Topic:** Arrays, in-place marking
- **Difficulty:** Medium
- **Status:** Solution and tests added

Given an unsorted integer array, return the smallest positive integer that does not appear in it. The solution runs in O(N) time and uses O(1) extra space.

## Files

- [Brute-force approach](brute-force.md)
- [My plan with a worked example](plan.md)
- [JavaScript solution](solution.js)
- [Expected test cases](test-cases.md)
- [Automated tests](solution.test.js)

## Core idea

For an array of length N, the answer is at most N + 1. The solution replaces values that cannot be answers with a sentinel, then uses the sign at index x - 1 to record that positive value x appeared. The first index that remains positive identifies the missing value.

The solution modifies the input array in place. Make a copy first if the original input must be preserved.

## Complexity

- **Time:** O(N)
- **Extra space:** O(1)

## Run the tests

From the repository root:

```sh
node --test arrays-strings/medium/first-missing-positive/solution.test.js
```

From this problem's folder:

```sh
node --test solution.test.js
```

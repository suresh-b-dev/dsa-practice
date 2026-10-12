# Max Min of an Array

- Problem: Given an integer array, return the sum of its maximum and minimum values.
- Topic: Arrays
- Difficulty: Easy
- Status: Solution and tests added

## My approach

Initialize the minimum and maximum from the first array value. Scan the remaining values once, updating the minimum or maximum when needed, then return their sum.

- **Time:** O(N)
- **Extra space:** O(1)

The function keeps the empty-array behavior from my submitted version and returns 0 for an empty array. The problem constraints guarantee a non-empty array, so this is defensive behavior.

## Files

- [My approach notes](brute-force.md)
- [JavaScript solution with comments](solution.js)
- [Test cases](solution.test.js)

## Run the tests

From the repository root:

```sh
node --test arrays-strings/easy/max-min-array-sum/solution.test.js
```

From this problem's folder:

```sh
node --test solution.test.js
```

## Run a single test

Match part of a test's name:

```sh
node --test --test-name-pattern="only negative values" arrays-strings/easy/max-min-array-sum/solution.test.js
```

## Try a different input

From the repository root:

```sh
node -e "const min_max = require('./arrays-strings/easy/max-min-array-sum/solution'); console.log(min_max([8, -3, 2]));"
```

For a repeatable check, add another case to solution.test.js with the input and expected sum, then run the test command again.

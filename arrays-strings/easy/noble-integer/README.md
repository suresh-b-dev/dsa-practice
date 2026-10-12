# Noble Integer

- Problem: [Noble Integer — InterviewBit](https://www.interviewbit.com/problems/noble-integer/)
- Topic: Arrays and strings
- Difficulty: Easy
- Status: Solution and tests added

## Problem in my words

Return 1 if an array value p has exactly p array elements strictly greater than it. Otherwise return -1.

## My approach

Sort the array in descending order, skip a value when it repeats the previous value, and compare each first occurrence with its index. The solution checks every position, including the final one.

The function sorts the input array in place.

## Files

- [My brute-force notes](brute-force.md)
- [My plan and review](plan.md)
- [JavaScript solution](solution.js)
- [Test cases](solution.test.js)

## Run the tests

Run all Noble Integer tests from the repository root:

```sh
node --test arrays-strings/easy/noble-integer/solution.test.js
```

Or, after changing into this problem's folder, run:

```sh
node --test solution.test.js
```

Run one test by matching part of its name:

```sh
node --test --test-name-pattern="final array position" arrays-strings/easy/noble-integer/solution.test.js
```

## Try a different input

From the repository root, call the exported function with any integer array:

```sh
node -e "const nobleInteger = require('./arrays-strings/easy/noble-integer/solution'); console.log(nobleInteger([3, 3, 2]));"
```

To keep a new input as a repeatable check, add a test case to solution.test.js with the input and expected result, then run the test command again. The solution sorts each input array in place, so use a fresh array when repeating a manual call.

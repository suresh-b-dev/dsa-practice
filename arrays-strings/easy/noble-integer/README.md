# Noble Integer

- **Problem link:** [Noble Integer — InterviewBit](https://www.interviewbit.com/problems/noble-integer/)
- **Topic:** Arrays, sorting, duplicate handling
- **Difficulty:** Easy
- **Status:** Practice
- **Language:** JavaScript

## Problem summary

Given an integer array, return `1` if there is a value `p` in the array for which exactly `p` elements are strictly greater than `p`. Otherwise return `-1`.

## Example

For `[3, 2, 1, 3]`, the answer is `1`: the value `2` has two array elements greater than it.

For `[1, 1, 3, 3]`, the answer is `-1`.

## Approaches

- [Brute force](brute-force.md): try every array value and count all greater values. `O(n²)` time, `O(1)` extra space.
- [Plan and optimized approach](plan.md): sort descending and inspect the first position of each distinct value. `O(n log n)` time, `O(n)` extra space because the solution copies the input before sorting.

## Files

- [Brute-force notes](brute-force.md)
- [Plan and interview explanation](plan.md)
- [JavaScript solution](solution.js)
- [Tests](solution.test.js)

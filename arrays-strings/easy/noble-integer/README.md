# Noble Integer

- Problem: [Noble Integer — InterviewBit](https://www.interviewbit.com/problems/noble-integer/)
- Topic: Arrays and strings
- Difficulty: Easy
- Status: Plan drafted; implementation pending

## Problem in my words

Return 1 if an array value p has exactly p array elements strictly greater than it. Otherwise return -1.

For the first example, p = 2 has two greater elements, so the answer is 1. In the second example, no value satisfies the condition, so the answer is -1.

## My approaches

- [My brute-force notes](brute-force.md): try each value and count the elements strictly greater than it. Time O(n²), extra space O(1).
- [My plan and its review](plan.md): sort descending, skip repeated values, and compare each distinct value with its index.

No solution code has been added. I will implement my own approach and have it reviewed before any final code is added.

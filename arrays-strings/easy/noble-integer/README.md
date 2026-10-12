# Noble Integer

- Problem: [Noble Integer — InterviewBit](https://www.interviewbit.com/problems/noble-integer/)
- Topic: Arrays and strings
- Difficulty: Easy
- Status: Brute-force idea drafted; plan in progress
- Language: JavaScript

## Problem in my words

Return 1 if an array value p has exactly p array elements strictly greater than it. Otherwise return -1.

For the first example, p = 2 has two greater elements, so the answer is 1. In the second example, no value satisfies the condition, so the answer is -1.

## My current approach

Try every value as p. For each candidate, count all array values strictly greater than p. If that count equals p, return 1. If no candidate works, return -1.

- Brute-force time: O(n²)
- Extra space: O(1)

See [my brute-force notes](brute-force.md) and [my plan](plan.md).

## Next step

I will write and attempt my own final approach before adding any solution code here. Suggestions in the notes are prompts for my reasoning, not a completed solution.

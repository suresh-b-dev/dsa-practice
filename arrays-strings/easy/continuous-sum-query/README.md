# Q4. Continuous Sum Query

## Problem

There are A beggars in a row, each starting with zero coins. Each donation is given as [L, R, P] and adds P coins to every beggar from position L through position R, inclusive. Return the final amount for each beggar.

**Index convention:** donation positions in this problem are one-based, matching the statement: beggar 1 is position 1, and beggar A is position A. The returned JavaScript array is naturally accessed using zero-based indexes: its first element contains beggar 1's total.

## Constraints

- 1 <= A <= 200,000
- 1 <= L <= R <= A
- 1 <= P <= 1,000
- 0 <= B.length <= 100,000

## Example

A = 5  
B = [[1, 2, 10], [2, 3, 20], [2, 5, 25]]

Expected result: [10, 55, 45, 25, 25]

## Brute-force approach

Create an array of A zeros. For each donation, visit every beggar from L through R and add P to that beggar's total. See [brute-force notes](brute-force.md).

## Plan

See [the difference-array and prefix-sum plan](plan.md).

## Test cases

See [expected test cases](test-cases.md). Their ranges use the same one-based positions as the problem statement.

## Solution

See [solution.js](solution.js). The implementation records each donation's start and cancellation boundary, then uses a prefix-sum pass to compute all totals in O(A + Q) time.

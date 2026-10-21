# Q4. Continuous Sum Query

## Problem

There are A beggars in a row, each starting with zero coins. Each donation is described by [L, R, P] and adds P coins to every beggar from index L through index R, inclusive. Return the final amount for each beggar.

**Index convention in this repository:** donation ranges are zero-based and inclusive. The original problem statement uses one-based positions; subtract 1 from both endpoints when converting an original input to this repository's convention.

## Constraints using zero-based ranges

- 1 <= A <= 200,000
- 0 <= L <= R < A
- 1 <= P <= 1,000
- 0 <= B.length <= 100,000

## Example

A = 5  
B = [[0, 1, 10], [1, 2, 20], [1, 4, 25]]

Expected result: [10, 55, 45, 25, 25]

## My brute-force approach

Create an array of A zeros. For every donation, visit each beggar in its inclusive zero-based range and add the donation amount. See [brute-force notes](brute-force.md) for the full steps and complexity.

## My plan

[Plan notes](plan.md) — TODO; I will add my own plan before implementing the solution.

## Test cases

See [expected test cases](test-cases.md).

## Solution

TODO — I will add my solution after I write and review it.

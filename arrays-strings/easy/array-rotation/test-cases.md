# Array Rotation test cases

These are expected input/output cases for checking the solution once it is added.

| Case | Array A | B | Expected result | What it checks |
|---|---|---:|---|---|
| Example 1 | [1, 2, 3, 4] | 2 | [3, 4, 1, 2] | Multiple right rotations |
| Example 2 | [2, 5, 6] | 1 | [6, 2, 5] | One right rotation |
| B equals array length | [1, 2, 3, 4] | 4 | [1, 2, 3, 4] | Full rotation returns original order |
| B greater than array length | [1, 2, 3] | 5 | [2, 3, 1] | Effective rotation count is 5 modulo 3 |
| Single element | [7] | 9 | [7] | Rotating a one-element array has no visible effect |
| Larger rotation count | [4, 8, 12, 16, 20] | 12 | [16, 20, 4, 8, 12] | Rotation count greater than N |

The stated constraints require N >= 1 and B >= 1. The empty-array case is therefore not included.

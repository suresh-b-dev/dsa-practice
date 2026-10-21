# Continuous Sum Query test cases

Use these inputs and expected outputs to check the solution after it is written.

| Case | Beggars A | Donations B | Expected amounts | What it checks |
|---|---:|---|---|---|
| Example | 5 | [[1, 2, 10], [2, 3, 20], [2, 5, 25]] | [10, 55, 45, 25, 25] | Overlapping donation ranges |
| No donations | 3 | [] | [0, 0, 0] | Empty donation list |
| One beggar | 1 | [[1, 1, 7]] | [7] | Smallest valid array and single-position range |
| Full range | 4 | [[1, 4, 3]] | [3, 3, 3, 3] | Donation covers every beggar |
| Separate ranges | 5 | [[1, 2, 4], [4, 5, 6]] | [4, 4, 0, 6, 6] | Beggar between ranges receives nothing |
| Overlap at one position | 3 | [[1, 2, 5], [2, 3, 8]] | [5, 13, 8] | Shared endpoint receives both donations |
| Single-position donations | 3 | [[2, 2, 9], [3, 3, 4]] | [0, 9, 4] | Inclusive range endpoints |

All ranges above use the problem's 1-based indexing.

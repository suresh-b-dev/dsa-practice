# Continuous Sum Query test cases

These test inputs use zero-based inclusive donation ranges, matching the convention used in this repository.

| Case | Beggars A | Donations B | Expected amounts | What it checks |
|---|---:|---|---|---|
| Example | 5 | [[0, 1, 10], [1, 2, 20], [1, 4, 25]] | [10, 55, 45, 25, 25] | Overlapping donation ranges |
| No donations | 3 | [] | [0, 0, 0] | Empty donation list |
| One beggar | 1 | [[0, 0, 7]] | [7] | Smallest valid array and single-position range |
| Full range | 4 | [[0, 3, 3]] | [3, 3, 3, 3] | Donation covers every beggar |
| Separate ranges | 5 | [[0, 1, 4], [3, 4, 6]] | [4, 4, 0, 6, 6] | Beggar between ranges receives nothing |
| Overlap at one position | 3 | [[0, 1, 5], [1, 2, 8]] | [5, 13, 8] | Shared endpoint receives both donations |
| Single-position donations | 3 | [[1, 1, 9], [2, 2, 4]] | [0, 9, 4] | Inclusive range endpoints |

The original problem statement numbers beggars starting at 1. Subtract 1 from both range endpoints when converting those inputs to the zero-based examples here.

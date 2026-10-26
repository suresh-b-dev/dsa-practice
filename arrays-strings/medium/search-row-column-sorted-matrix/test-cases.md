# Sorted Matrix Search Test Cases

The encoded position uses 1-based coordinates: row * 1009 + column.

| Case | Matrix | B | Expected | What it checks |
|---|---|---:|---:|---|
| First example | [[1, 2, 3], [4, 5, 6], [7, 8, 9]] | 2 | 1011 | Match at row 1, column 2 |
| Second example with duplicates | [[1, 2], [3, 3]] | 3 | 2019 | Smallest encoded position among duplicates |
| Target absent | [[1, 2], [3, 4]] | 5 | -1 | Value is larger than every matrix element |
| Target below all values | [[5, 6], [7, 8]] | 1 | -1 | Value is smaller than every matrix element |
| Single cell match | [[-4]] | -4 | 1010 | One-based encoding for row 1, column 1 |
| Multiple matches in first row | [[2, 2, 2], [3, 4, 5]] | 2 | 1010 | Leftmost match is selected |
| Multiple rows and columns | [[1, 2, 2], [2, 2, 3], [2, 3, 4]] | 2 | 1011 | Smallest row-major encoded matching position |

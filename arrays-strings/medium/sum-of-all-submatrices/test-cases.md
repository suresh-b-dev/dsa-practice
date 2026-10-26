# Sum of All Submatrices test cases

| Case | Matrix | Expected sum | What it checks |
|---|---|---:|---|
| First example | [[1, 1], [1, 1]] | 16 | All cells have the same value |
| Second example | [[1, 2], [3, 4]] | 40 | Different cell contributions |
| Single cell | [[7]] | 7 | Smallest matrix |
| Single row | [[1, 2, 3]] | 20 | Rectangular matrix with one row |
| All zeroes | [[0, 0], [0, 0]] | 0 | Zero-valued cells |
| Zeroes and non-zeroes | [[0, 1], [2, 0]] | 12 | Only non-zero cells contribute |
| 3 x 3 ones | [[1, 1, 1], [1, 1, 1], [1, 1, 1]] | 100 | Larger set of submatrices |

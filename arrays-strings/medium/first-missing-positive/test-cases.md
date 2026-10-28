# First Missing Integer test cases

| Case | Input | Expected | What it checks |
|---|---|---:|---|
| First example | [1, 2, 0] | 3 | Consecutive positive values starting at 1 |
| Second example | [3, 4, -1, 1] | 2 | Missing value within the positive range |
| Third example | [-8, -7, -6] | 1 | No positive values |
| Missing 1 | [2] | 1 | Smallest positive is absent |
| One value present | [1] | 2 | Answer is N + 1 |
| Duplicates | [1, 1, 2, 2] | 3 | Duplicate values do not change the result |
| All values 1 through N present | [3, 2, 1] | 4 | Answer is N + 1 |
| Values above N | [7, 8, 9, 11] | 1 | Large positives are outside the needed range |

# Add One To Number test cases

| Case | Input digits | Expected digits | What it checks |
|---|---|---|---|
| Example | [1, 2, 3] | [1, 2, 4] | Increment without a carry chain |
| Carry to previous digit | [1, 2, 9] | [1, 3, 0] | Carry from the last digit |
| All nines | [9, 9, 9] | [1, 0, 0, 0] | Carry creates a new most-significant digit |
| Leading zeroes | [0, 1, 0, 1] | [1, 0, 2] | Normalize the output by removing leading zeroes |
| Only zero | [0] | [1] | Smallest valid input |
| Several leading zeroes | [0, 0, 0, 9] | [1, 0] | Carry with leading zeroes in the input |
| Zeroes followed by eight | [0, 0, 8] | [9] | Leading zeroes disappear without a new carry |

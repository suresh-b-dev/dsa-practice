# Plan: Add One to a Number

1. Create an empty result array and initialize a carry to 1, because the task is to add one.
2. Start at the last digit, the least significant digit, and move from right to left.
3. Add the current digit and the carry. Store the ones digit (sum modulo 10) in the result, and keep the tens part (floor of sum divided by 10) as the next carry.
4. After processing all input digits, append the remaining carry if it is nonzero. This handles inputs such as [9, 9, 9], which become [1, 0, 0, 0].
5. Reverse the result because digits were collected from right to left.
6. Remove leading zeroes from the result. Keep at least one digit if the result is zero.
7. Return the normalized digit array.

## Complexity

- **Time:** O(N), because each digit is processed once.
- **Space:** O(N) for the result array.

## Important note about the direct numeric approach

Converting all digits into one JavaScript Number, adding one, and extracting the digits is not safe for this problem's input limit. JavaScript Number cannot exactly represent integers with up to one million digits. The digit-by-digit carry method avoids converting the full value into a Number.

# Add One To Number

- **Topic:** Arrays
- **Difficulty:** Easy
- **Status:** Solution and test cases added

Given a non-negative number represented by an array of digits, return its digits after adding one. Input leading zeroes are allowed; the output must not contain leading zeroes.

## Files

- [My plan](plan.md)
- [Direct numeric approach and its limitation](brute-force.md)
- [Example test cases](test-cases.md)
- [JavaScript carry solution](solution.js)
- [Automated tests](solution.test.js)

## Approach and complexity

The solution processes digits from right to left, propagates a carry, reverses the collected digits, and removes leading zeroes. It runs in O(N) time and uses O(N) space for the result.

## Run the tests

From the repository root:

```sh
node --test arrays-strings/easy/add-one-to-number/solution.test.js
```

From this problem's folder:

```sh
node --test solution.test.js
```

## Try a custom input

From the repository root:

```sh
node -e "const addOne = require('./arrays-strings/easy/add-one-to-number/solution'); console.log(addOne([0, 1, 0, 1]));"
```

Expected output:

```text
[ 1, 0, 2 ]
```

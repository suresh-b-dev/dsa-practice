# Array Rotation

- Problem: Rotate an integer array to the right K times and return the resulting array.
- Topic: Arrays
- Difficulty: Easy
- Status: Solution and tests added

## Files

- [My plan](plan.md)
- [Initial repeated-rotation approach](brute-force.md)
- [Example test cases](test-cases.md)
- [JavaScript solution with comments](solution.js)
- [Automated tests](solution.test.js)

## Complexity

The reversal solution runs in O(N) time and uses O(1) extra space. It modifies the input array in place.

## Run the tests

From the repository root:

```sh
node --test arrays-strings/easy/array-rotation/solution.test.js
```

From this problem's folder:

```sh
node --test solution.test.js
```

Run one test by matching part of its name:

```sh
node --test --test-name-pattern="K greater" arrays-strings/easy/array-rotation/solution.test.js
```

## Try a custom input

From the repository root:

```sh
node -e "const rotate = require('./arrays-strings/easy/array-rotation/solution'); console.log(rotate([1, 2, 3, 4], 2));"
```

The function changes the array in place, so pass a fresh array when trying another input.

# Array Rotation

- Problem: Rotate an integer array to the right K times and return the resulting array.
- Topic: Arrays
- Difficulty: Easy
- Status: Solution and tests added

## My solution approach

1. Reduce K using the array length so rotations beyond a full cycle are removed.
2. Reverse the entire array.
3. Reverse the first section, from index 0 through rotate - 1.
4. Reverse the remaining section, from index rotate through the final index.
5. Return the rotated array.

The solution modifies the input array in place.

## Complexity

- **Time:** O(N), because the solution performs three reversals.
- **Extra space:** O(1), using swaps and one temporary value.

## Files

- [Initial repeated-rotation approach](brute-force.md)
- [Example test cases](test-cases.md)
- [JavaScript solution with comments](solution.js)
- [Automated tests](solution.test.js)

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

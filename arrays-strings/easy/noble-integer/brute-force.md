# Brute-force approach

## Idea

Try each array element as the candidate p. For that candidate, scan the whole array and count how many values are strictly greater than it. If the count equals p, return 1. If no candidate works after the scans, return -1.

## Steps

1. Loop through each index i from 0 to A.length - 1.
2. Treat A[i] as the candidate p.
3. Set greaterCount to 0.
4. Loop through every array element A[j].
5. If A[j] > p, increment greaterCount.
6. After the inner loop, if greaterCount === p, return 1.
7. If all candidates fail, return -1.

The inner scan can start at index 0; the candidate itself is not counted because it is not greater than itself. Equal values are also not counted, which matches the word **strictly** in the problem.

## Pseudocode

```text
for each candidate p in A:
    greaterCount = 0

    for each value x in A:
        if x > p:
            greaterCount += 1

    if greaterCount == p:
        return 1

return -1
```

## Complexity

- **Time:** O(n²) — for each of the n candidates, scan up to n values.
- **Extra space:** O(1) — only the candidate and counter are stored.

## Limitation

With n up to 200,000, the worst case is about n² comparisons, which is too slow. This is useful as a first correct idea, but we should optimize it.

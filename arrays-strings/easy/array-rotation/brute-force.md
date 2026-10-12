# My repeated-rotation approach

## Idea

Repeat a one-position right rotation the required number of times. For each rotation, save the last element, shift the other elements one position to the right, then place the saved element at the beginning.

## Steps

1. Calculate the effective rotation count as B modulo the array length. Rotating an array N times returns it to its original order.
2. Repeat the one-position rotation for that effective count.
3. For each rotation, save the last element before shifting.
4. Shift elements from right to left so earlier values are not overwritten.
5. Put the saved last element at the first position.
6. Return the array.

## Complexity

- If we repeat the rotation B times without reducing it, the time is O(N × B).
- After reducing the count to r = B modulo N, the time is O(N × r), with O(N²) worst-case time.
- Extra space is O(1) when each rotation is done in place with one temporary value.

The input allows B up to 10^9, so reducing the number of rotations is important. This repeated-shifting method can still be slow when N is large.

## My implementation

TODO — I will add my own solution after I write it.

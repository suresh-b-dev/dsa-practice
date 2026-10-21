# Plan: Difference Array and Prefix Sum

1. Create an array of length A and initialize every position to 0. Each array position represents one beggar's running donation total.
2. Process each donation [L, R, P]. The problem numbers beggars starting at 1, while JavaScript arrays start at index 0:
   - Add P at array index L - 1, where the donation starts.
   - If R is less than A, subtract P at array index R. This marks the position immediately after the donation's inclusive end.
3. Walk through the array from index 1 to A - 1. Add the previous position's accumulated value to the current position. This prefix-sum pass applies each donation to every beggar in its range.
4. Return the resulting array. Its first element is beggar 1's total, its second element is beggar 2's total, and so on.

## Why the boundary works

For a donation to beggars L through R inclusive, adding P at L - 1 starts its effect at the correct JavaScript array index. Subtracting P at R cancels that effect at the next position after beggar R. When R is A, there is no next position in the array, so no cancellation is needed.

## Complexity

- Time: O(A + Q), where Q is the number of donations.
- Space: O(A) for the output/difference array.

# Direct numeric approach

My initial idea was to convert the digits into one number using their place values, add 1, then repeatedly use modulo 10 and division by 10 to extract the answer's digits.

This is a useful way to reason about small examples, but it is **not valid for the full constraints in JavaScript**. The input can contain up to 1,000,000 digits, far beyond the range where JavaScript's Number type can represent every integer exactly. Converting the whole array to a Number can silently lose digits and return an incorrect answer.

For this reason, this approach should only be used for small values. The submitted solution works directly on the digit array with a carry and does not construct the full number.

## Complexity

For a small number with N digits, building and extracting its digits takes O(N) time and O(N) space. However, JavaScript Number precision makes this unsuitable for the problem's maximum input size.

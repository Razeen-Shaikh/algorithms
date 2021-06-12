# Binary Search

-   Compare x with the middle element.
-   If x matches with the middle element, we return the mid index.
-   Else If x is greater than the mid element, then x can only lie in the right half subarray after the mid element. So we recur for the right half.
-   Else (x is smaller) recur for the left half.

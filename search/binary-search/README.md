# Binary Search

_Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n)._

-   Compare x with the middle element.
-   If x matches with the middle element, we return the mid index.
-   Else If x is greater than the mid element, then x can only lie in the right half subarray after the mid element. So we recur for the right half.
-   Else (x is smaller) recur for the left half.

# Interpolation Search

_The Interpolation Search is an improvement over Binary Search for instances, where the values in a sorted array are uniformly distributed. Interpolation constructs new data points within the range of a discrete set of known data points. Binary Search always goes to the middle element to check. On the other hand, interpolation search may go to different locations according to the value of the key being searched. For example, if the value of the key is closer to the last element, interpolation search is likely to start search toward the end side._

-   In a loop, calculate the value of “pos” using the probe position formula.
-   If it is a match, return the index of the item, and exit.
-   If the item is less than arr[pos], calculate the probe position of the left sub-array. Otherwise, calculate the same in the right sub-array.
-   Repeat until a match is found or the sub-array reduces to zero.

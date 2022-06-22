# Bucket Sort

_Bucket sort is mainly useful when input is uniformly distributed over a range_

-   Create n empty buckets (Or lists).
-   Do following for every array element arr[i].
    .......a) Insert arr[i] into bucket[n\*array[i]]
-   Sort individual buckets using insertion sort.
-   Concatenate all sorted buckets.

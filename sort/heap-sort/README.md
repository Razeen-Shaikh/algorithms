# Heap Sort

_Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements._

**Heap Sort Algorithm for sorting in increasing order:**

-   Build a max heap from the input data.
-   At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of heap by 1. Finally, heapify the root of the tree.
-   Repeat step 2 while the size of the heap is greater than 1.

**Time Complexity:** O(n logn),

-   Time complexity of heapify is O(Logn).
-   Time complexity of createAndBuildHeap() is O(n)
-   And, hence the overall time complexity of Heap Sort is O(nLogn).

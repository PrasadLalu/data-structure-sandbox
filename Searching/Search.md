# Linear Search
```
procedure LinearSearch(A: list of items, target: item to search for)
    n = length(A)

    for i from 0 to n-1
        if A[i] equals target then
            return i // Return the index where the target element is found
        end if
    end for

    return -1 // Return -1 if the target element is not found in the list
end procedure
```

# Binary Search
```
procedure BinarySearch(A: list of sorted items, target: item to search for)
    left = 0
    right = length(A) - 1

    while left <= right
        mid = (left + right) / 2
        if A[mid] equals target then
            return mid // Return the index where the target element is found
        else if A[mid] < target then
            left = mid + 1 // Continue searching in the right half
        else
            right = mid - 1 // Continue searching in the left half
        end if
    end while

    return -1 // Return -1 if the target element is not found in the list
end procedure
```
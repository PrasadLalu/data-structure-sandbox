# Bubble Sorting
```
procedure BubbleSort(numbers: list of items)
    n = length(numbers)
    
    for i from 0 to n-1
        for j from 0 to (n-i-2)
            if numbers[j] > numbers[j+1] then
                // Swap the elements
                temp = numbers[j]
                numbers[j] = numbers[j+1]
                numbers[j+1] = temp
            end if
        end for
    end for
    
    return numbers
end procedure
```
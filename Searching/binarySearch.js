function binaryRecursiveSearch(numbers, target, left, right) {
    if (left <= right) {
        let mid = (left + right) / 2;
        if (numbers[mid] === target) {
            return mid;
        }

        if (numbers[mid] < target) {
            return binaryRecursiveSearch(numbers, target, mid+1, right);
        } else {
            return binaryRecursiveSearch(numbers, target, left, mid-1);
        }
    }

    return -1;
}


function binarySearch(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let steps = 0;

    while(left <= right) {
        let mid = (left + right) / 2;
        steps++;
        if (numbers[mid] === target) {
            console.log(`Steps: ${steps}`);
            return mid;
        }

        if (numbers[mid] < target) {
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }
}

const target = 11;
const numbers = [3, 5, 7, 9 ,11, 13, 15];

// const index = binarySearch(numbers, target);

const index = binaryRecursiveSearch(numbers, target, 0, numbers.length-1);
if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found.');
}


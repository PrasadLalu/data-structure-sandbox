

function search(arr, target) {
    let left = 0;
    let right = arr.length-1;

    while(left <= right) {
        let mid = (left + right) / 2;
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1
}   
const target = 11;
const numbers = [3, 5, 7, 9 ,11, 13, 15];
console.log(search(numbers, target));
function secondLargest(arr) {
    let n = arr.length;
    arr.sort((a, b) => a - b);

    for (let i = n - 1; i >= 1; i--) {
        if (arr[n - 1] != arr[i]) {

            return arr[i];
        }
    }
}

console.log(secondLargest([9, 8, 2, 6, 3, 4, 5]));

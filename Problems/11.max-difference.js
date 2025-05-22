function maxDifference(arr) {
    let min = arr[0];
    let max = 0;
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - min;
        max = Math.max(max, diff);
    }
    return max;
}

console.log(maxDifference([1, 2, 90, 10, 110]));
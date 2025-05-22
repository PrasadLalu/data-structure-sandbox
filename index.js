
function maxDifference(arr) {
    let min = arr[0];
    let max = 0;
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - min;
        max = Math.max(max, diff);
    }
    return max;
}


function maxDifference2(arr) {
    let min = Infinity;
    let max = 0;

    for (let item of arr) {
        if (item < min) {
            min = item
        } else {
            max = Math.max(max, item-min);
        }
    }
    return max;
}

console.log(maxDifference2([2, 3, 10, 6, 4, 8, 1]));


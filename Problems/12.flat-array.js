function process(arr) {
    let result = [];
    function helper(n) {
        for (let item of n) {
            if (Array.isArray(item)) {
                helper(item);
            } else {
                result.push(item);
            }
        }
    }
    helper(arr);
    return result;
}

const arr = [1, [2, 3], 4, [5, 6, [7, 8]]];
console.log(process(arr));


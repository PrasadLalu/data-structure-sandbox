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

function flatArray(arr) {
    let results = [];
    function helpers (items) {
        for (let i=0; i<items.length; i++) {
            if (Array.isArray(items[i])) {
                helpers(items[i]);
            } else {
                results.push(items[i]);
            }
        }
    }
    helpers(arr);
    return results;
}

const arr = [1, [2, 3], 4, [5, 6, [7, 8]]];
console.log(process(arr));


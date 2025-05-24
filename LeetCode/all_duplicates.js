function duplicates(nums) {
    const seen = new Set();
    const results = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            results.add(num);
        } else {
            seen.add(num);
        }
    }
    return Array.from(results);
}

const nums = [4,3,2,7,8,2,3,1, 3];
// const nums = [1,1,2];
// const nums = [1];
const output = duplicates(nums);
console.log(output);
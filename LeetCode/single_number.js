function singleNumber(nums) {
    let seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            seen.delete(num);
        } else {
            seen.add(num);
        }
    }
    return [...seen][0];
}

const nums = [4,1,2,1,2];
console.log(singleNumber(nums));

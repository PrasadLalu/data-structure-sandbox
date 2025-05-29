function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, item) => sum + item, 0);
    return expectedSum - actualSum;
}

const nums = [0, 1,2,8,4,3,6,9,5]; 
const output = missingNumber(nums);
console.log(output);
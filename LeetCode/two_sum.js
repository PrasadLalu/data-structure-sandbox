function twoSum(nums, target) {
    let objs = new Map();

    for (let i=0; i<nums.length; i++) {
        let complement = target - nums[i];
        if (objs.has(complement)) {
            return [objs.get(complement), i];
        }
        objs.set(nums[i], i);
    }
    return [];
}

// const nums = [2,7,11,15];
// const target = 9;

// const nums = [3,2,4];
// const target = 6;

const nums = [3,3];
const target = 6;

const output = twoSum(nums, target);
console.log(output);
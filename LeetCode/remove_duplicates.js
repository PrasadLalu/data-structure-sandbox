var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;

    let k = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[k-1] !== nums[i]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return nums.slice(0, k);
};

const nums = [1,1,2];
console.log(removeDuplicates(nums));

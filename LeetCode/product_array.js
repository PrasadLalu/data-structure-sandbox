function productExceptSelf(nums) {   
   let n = nums.length;
   let result = new Array(n).fill(1);

   let left = 1;
   for (let i=0; i<n; i++) {
    result[i] = left;
    left *= nums[i];
   }

   let right = 1;
   for (i=n-1; i>=0; i--) {
    result[i] *= right;
    right *= nums[i];
   }
    return result;
}

const nums = [1,2,3,4];
console.log(productExceptSelf(nums));

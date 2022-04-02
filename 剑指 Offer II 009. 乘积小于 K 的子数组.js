/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
    let left = 0,sum=1;
    let res = 0;
    for(let right = 0;i < nums.length;i++){
        sum *= nums[right];
        while(left<right && sum >= k){
            sum /= nums[left++];
        }
        res += right >= left ? right - left + 1 : 0;
    }
    return res;
};
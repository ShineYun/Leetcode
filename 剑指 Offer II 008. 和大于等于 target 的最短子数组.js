/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let left=0,sum=0,res = Infinity;
    for(let right=0;right<nums.length;right++){
        sum+=nums[right];
        while (left <= right && sum >= target){
            res = Math.min(res, right - left + 1);
            sum -= nums[left++];
        }
    }
    return res == Infinity ? 0 : res;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let preSumMap = new Map();
    let res = 0,preSum=0;
    preSumMap.set(0,1);
    for(let i=0;i<nums.length;i++){
        preSum += nums[i];
        res += (preSumMap.has(preSum-k)) ? preSumMap.get(preSum-k) : 0;
        preSumMap.set(preSum, (preSumMap.has(preSum)) ? preSumMap.get(preSum) + 1 : 1);
    }
    return res;
};
console.log(subarraySum(nums,k))

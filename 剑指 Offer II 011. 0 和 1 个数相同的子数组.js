/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {
    let maxlength = 0;
    let map = new Map();
    let presum = 0;  //前缀和
    map.set(0,-1);  //空数组下标设置为-1
    for(let i=0;i<nums.length;i++){
        presum += (nums[i]) ? 1 : -1;
        if(map.has(presum)){
            let preindex = map.get(presum);
            maxlength = Math.max(maxlength,i-preindex); //同前缀和的坐标相减 中间的数组即和为0的数组
        }
        else{
            map.set(presum,i);
        }
    }
    return maxlength;
};
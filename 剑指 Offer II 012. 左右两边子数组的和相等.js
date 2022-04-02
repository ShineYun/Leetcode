/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
     let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
    }
    let cnt = 0 ,pos = -1;
    for(let j=0;j<nums.length;j++){
        if(cnt == sum - nums[j]){
            return j;
        }
        else{
            cnt += nums[j];
            sum -= nums[j];
        }
    }

};

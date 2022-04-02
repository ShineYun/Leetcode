/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  var res=[]
  var set = new Set();
  if(nums==null || nums.length<3)
      return res;
  var nums = nums.sort((a,b)=>(a-b));

  for(var a=0;a<nums.length;a++){
    var l = a+1,r = nums.length-1;
    if(nums[a]==nums[a-1]) continue;
    while(l<r){
      if(nums[l]+nums[r]+nums[a]==0){
        res.push([nums[a],nums[l],nums[r]]);
        while(l<r && nums[l]==nums[++l]);
        while(l<r && nums[r]==nums[--r]);
      }
      else if(nums[l]+nums[r]+nums[a]>0){
        r--
      }else{
        l++;
      }
    }
  }
  return res;
};
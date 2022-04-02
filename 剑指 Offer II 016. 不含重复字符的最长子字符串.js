/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(s.length<=1)
        return s.length;
    let left=0,right=0,res=0;
    let window = new Set();
    while(right<s.length){
        if(!window.has(s[right])){
            res = Math.max(res, right-left+1);
            window.add(s[right]);
            right++;
        }else{
            window.delete(s[left]);
            left++;
        }
    }
    return res;
};
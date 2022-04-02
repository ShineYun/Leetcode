/**
 * @param {string} s
 * @return {boolean}
 */
// initial a fake stack

 var validPalindrome = function(s) {
    let left=0,right=s.length-1;
   while(left<right){
    let tmp_l = s.charCodeAt(left),tmp_r = s.charCodeAt(right);
    if(tmp_l==tmp_r){
        left++;
        right--;
    }
    else if(s.charCodeAt(left+1)==s.charCodeAt(right)){
        left++;
    }
    else if(s.charCodeAt(left)==s.charCodeAt(right-1)){
        right--;
    }
    else{
        return false;
    }
   }
   return true;
};
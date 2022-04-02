/**
 * @param {string} s
 * @return {number}
 */
 var isPlindrome = function(s){
    let left=0,right=s.length-1;
    while(left<right){
        if(s[left]!=s[right]){
         return false;   
        }
        left++;
        right--;
    }
    return true;
}

var countSubstrings = function(s) {
    let cnt=0;
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<s.length+1;j++){
            if(isPlindrome(s.slice(i,j))){
                cnt++;
            }
        }
    }
    return cnt;
};
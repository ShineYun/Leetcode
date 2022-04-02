var isPalindrome = function(s) {
    let str = "";
    s = s.toUpperCase();
    for(let i=0; i<s.length;i++){
        let tmp = s.charCodeAt(i);
        if((tmp>=65 && tmp<=90) || (tmp>=48 && tmp<=57))
            str += s[i];
        else{
            continue;
        }
    }

    let left=0,right=str.length-1;
    while(left<right){
        if(str[left++]!=str[right--]){
            return false;
        }
    }
    return true;
};
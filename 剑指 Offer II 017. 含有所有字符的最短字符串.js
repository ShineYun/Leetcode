/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
s=""
t = "asdfgh";
 var minWindow = function(s, t) {
    let target = {},window = {};
    for(let i =0; i< t.length; i++){
        target[t[i]] = (target[t[i]]||0) + 1;
    }
    let str="";
    let left=0,right=0,cnt=0;
    for(;right<s.length;right++){
        window[s[right]] = (window[s[right]] || 0) + 1;
        if(window[s[right]] <= right[s[right]])
            cnt++;
        while(window[s[left]] > target[s[left]] || target[s[left]] == undefined ){
            window[s[left]]--;
            left++;
        }
        if(cnt == t.length){
            if(str.length==0 || right - left + 1< str.length){
                str = str.slice(left,right+1);
            }
        }
        return str ;
    }
    // for(;right<s.length;right++){
    //     window[s[right]] = (window[s[right]] || 0) + 1 ;
    //     if(window[s[right]] <= target[s[right]])
    //         cnt++;
    //     while(window[s[left]] > target[s[left]]){
    //         window[s[left]]--;
    //         left++;
    //     }
    //     if(cnt == t.length){
    //         if(ans.empty()||r-l+1<ans.length) ans=s(l,r-l+1);
    //     }
        
    // }
};
minWindow(s,t);
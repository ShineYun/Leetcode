/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    let res=[];
    let map = new Map();
    for(let i=0;i<s1.length;i++){
        map.set(s1[i], (map.has(s1[i])) ? map.get(s1[i]) + 1 : 1 );
    }
    console.log(map);
    let tmpmap = new Map();


    for(let j=0;j<s2.length - s1.length + 1 ;j++){
        let flag = 0;
        tmpmap.clear();
        for(let i=0;i<s1.length;i++){
            tmpmap.set(s2[j + i], (tmpmap.has(s2[j + i])) ? tmpmap.get(s2[j + i]) + 1 : 1 );
        }
        map.forEach(function(value,key,map){
            if(tmpmap.has(key) && tmpmap.get(key)==value)
                flag ++;

        })
        if(flag == map.size)
            res.push(j);
    }
    return res;
};


 var findAnagrams = function(s, p) {
    return checkInclusion(p,s);
};

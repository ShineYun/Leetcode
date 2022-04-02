/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var left = 0, right = numbers.length-1;
    var flag = true;
    while(flag){
        if(numbers[left]+numbers[right] == target)
            return [left,right];
        else if(target>numbers[left]+numbers[right])
            left++;
        else
            right--;
    }
};
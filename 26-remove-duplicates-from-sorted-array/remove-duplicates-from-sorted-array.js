/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    for(let i=1;i<nums.length;i++){
        if(nums[i] === nums[i-1]){
            k +=1;
        } else {
            nums[i-k] = nums[i]
        }
    }
    return nums.length - k;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let maxRes = 0
    for(let i = 0; i<nums.length;i++){
        if(nums[i] === 1){
            console.log(nums[i])
            count++
        } else {
            maxRes = Math.max(maxRes,count);
            count = 0
        }
        maxRes = Math.max(maxRes,count);
    }
    return maxRes;
};
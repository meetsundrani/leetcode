/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0
   for(const i of nums){
    result ^= i
   }
    return result
};
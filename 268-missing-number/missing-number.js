/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let currSum = 0
    let sum = n*(n+1)/2
    nums.forEach((x) => {
        currSum += x
    })
    return sum - currSum
};
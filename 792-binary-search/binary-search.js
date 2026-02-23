/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    l = 0;
    h = nums.length - 1;
    while (l<= h){
    mid = Math.floor((l+h)/2);
                if(nums[mid] === target) {
            return mid;
        }
        if(target < nums[mid]){
            h = mid - 1;
        }
        else{
           l = mid  + 1;
        }
    }
    return -1;
};
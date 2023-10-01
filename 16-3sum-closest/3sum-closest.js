/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
     nums.sort((a,b)=> a-b);
    let resultSum = nums[0]+nums[1]+nums[2]
    let minDiff = Number.MAX_SAFE_INTEGER
    
    for(let i = 0; i< nums.length-2;i++) {
        let l = i+1;
        let r = nums.length - 1;
        
        while(l < r){
            let sum = nums[i] + nums[l] + nums[r];
          if(sum == target){
              return sum;
          } 
        else if(sum < target){
            l++;
        }
        else{
            r--;
        }
        let diffTar = Math.abs(sum-target);
        if(diffTar < minDiff)
            {
                resultSum = sum;
                minDiff = diffTar;
            }
    }
}
       return resultSum
}
        
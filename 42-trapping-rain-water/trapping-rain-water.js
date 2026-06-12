/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let start = 0, end = height.length -1, lMax =0 , rMax = 0, tot= 0;
    while(start < end){
        lMax = Math.max(lMax, height[start]);
        rMax = Math.max(rMax, height[end]);
        if(lMax < rMax) {
            tot += lMax - height[start]; 
            start++;
        } else {
            tot += rMax - height[end];
            end--;
        }

        }
        return tot;
};
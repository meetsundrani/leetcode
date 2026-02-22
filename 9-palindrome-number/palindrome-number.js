/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const res = [];
    const nums = [...x.toString().split('')]
    nums.forEach((val) => {
        res.unshift(Number(val))
    })
    const ix = Number(res.join(''))
    
    if (ix === x){
        return true
    }
    
   return false;
};
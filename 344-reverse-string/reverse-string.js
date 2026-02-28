/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
let l = 0;
let h = s.length-1
while(l<h){
    const temp = s[l]
s[l] = s[h];
s[h] = temp;
l++;
h--;
}
};
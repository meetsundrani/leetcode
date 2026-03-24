/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let sorted1 =s.split('').sort().join('');
    let sorted2 =t.split('').sort().join('');
    console.log(sorted1, sorted2)
return sorted1 === sorted2

};
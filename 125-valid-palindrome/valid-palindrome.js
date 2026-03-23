/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     const result = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const revStr = result.split('').reverse().join('');
    return result === revStr;
};
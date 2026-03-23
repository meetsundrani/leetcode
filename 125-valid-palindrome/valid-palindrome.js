/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let revStr = str.split('').reverse().join('');
  return revStr === str;
};
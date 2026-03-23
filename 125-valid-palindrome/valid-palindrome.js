/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
        let str = s.split(",").join("")
    let sr = str.split(" ").join("")
    let string = sr.toLowerCase().split(/[^a-z0-9]+/).join("");
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false
        }
    }
    return true


};
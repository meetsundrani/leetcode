/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;

    let reversed = 0;

    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.trunc(x / 10);
    }

    return x === reversed || x === Math.trunc(reversed / 10);
};
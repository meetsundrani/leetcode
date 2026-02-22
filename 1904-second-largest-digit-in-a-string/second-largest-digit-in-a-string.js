/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let res = [];
    let arr=s.split("");
    arr.forEach((ar) => {
        if(Number(ar) > -1 && Number(ar) < 10) {
            res.push(Number(ar));
        }
    });
    res = [...new Set(res)].sort();
    return res.length < 2 ? -1 : res[res.length - 2];
};
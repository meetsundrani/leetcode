/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    const li = {};
    for(let i = 0; i< s.length;i++){
        const og = s[i];
        const rep = t[i];
        if(li[og]){
            if(li[og] !== rep){
                return false;
            }
        } else if (Object.values(li).includes(rep)){
            return false;
        }
        li[og] = rep;
    }
    return true;
};
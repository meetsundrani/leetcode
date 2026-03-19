/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let splitJwels = jewels.split('');
    let count = 0;
    for(let i = 0; i<stones.length; i++){
        for(let j = 0; j<splitJwels.length; j++){
            if(stones[i] === splitJwels[j]){
                count++;
            }
        }
    }
    console.log(count);
    return count;
};
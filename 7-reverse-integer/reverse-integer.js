/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const maxx = Math.pow(2,31) - 1;
  const minn = Math.pow(2,31) * -1;

  const sign = x < 0 ? -1 : 1;
x = Math.abs(x)
  let og = x;
  let rev = 0;
  while(x > 0) {
    rev = rev * 10 + x % 10;
     x = Math.floor(x/10);

  }
  if (rev < maxx && rev > minn) {
    return rev * sign;
  } else {
    return 0;
  }
    
};
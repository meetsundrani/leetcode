/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i=0;i<matrix.length;i++){
        for(let j=i+1;j<matrix.length;j++){
            let temp = matrix[j][i]
            matrix[j][i] = matrix[i][j]
            matrix[i][j] = temp
        }
    } 
    console.log(matrix)
for(let i=0;i<matrix.length;i++){
    matrix[i] = matrix[i].reduce((acc,item) => [item].concat(acc), [])
}
};
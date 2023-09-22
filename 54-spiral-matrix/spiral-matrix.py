class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        res = []
        rs = 0
        re = len(matrix)
        cs = 0
        ce = len(matrix[0])
        while rs < re and cs < ce:
            
            #right
            for i in range(cs, ce):
                res.append(matrix[rs][i])
            rs+=1
            
            #down
            for i in range(rs,re):
                res.append(matrix[i][ce - 1])
            ce-=1
            
            if not (rs < re and cs < ce):
                break
                
            #left
            for i in range(ce-1,cs - 1,-1):
                res.append(matrix[re-1][i])
            re-=1
            
            #up
       
            for i in range(re-1,rs -1 ,-1):
                res.append(matrix[i][cs])
            cs+=1
        return res
                
        
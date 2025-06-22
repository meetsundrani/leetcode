class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        res = []
        dic = {}
        for i in nums:
            if i in dic:
                dic[i] += 1
            else:
                dic[i] = 1
        for i in dict.keys(dic):
            if dic[i] == 2:
                res.append(i)
        return res
        
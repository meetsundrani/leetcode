class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        dic = {}
        res = []

        for i in nums:
            if i not in dic:
                dic[i] = 1
            else:
                dic[i] += 1
        for i in dict.keys(dic):
            if dic[i] == 2:
                res.append(i)
        return res
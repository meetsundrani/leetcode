class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        freq = {}
        res = []
        m = len(nums) / 2
        for i in nums:
            if i in freq:
                freq[i]+= 1
            else:
                freq[i] = 1
        for key,value in freq.items():
            if value > m:
                res.append(value)
            if len(res) != 0 :
                n = max(res)
                if value == n:
                    return key
        
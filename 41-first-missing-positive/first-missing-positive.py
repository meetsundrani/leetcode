class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = 1
        for i in sorted(nums):
            if i == n:
                n+=1
        return n    
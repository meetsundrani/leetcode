class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        print(n)
        for i in range(n+1):
            if i not in nums:
                return i
        
        
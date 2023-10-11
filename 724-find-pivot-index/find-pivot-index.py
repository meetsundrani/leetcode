class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        sumL = 0
        sumR = sum(nums)

        for i in range(len(nums)):
            sumR -= nums[i]
            if sumR == sumL:
                return i
            sumL += nums[i]
        return -1
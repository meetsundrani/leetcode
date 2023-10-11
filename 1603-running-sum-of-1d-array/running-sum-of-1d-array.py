class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        sum = 0
        li = []
        for i in range(len(nums)):
            sum = sum + nums[i]
            li.append(sum)
        return li 
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, v in enumerate(nums):
            remain = target - v
            if remain in seen:
               return [seen[remain], i]
            seen[v] = i
        return []

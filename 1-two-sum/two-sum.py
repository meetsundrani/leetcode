class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for ind,val in enumerate(nums):
            remain = target-val
            if remain in seen:
                return [ind, seen[remain]]
            seen[val] = ind
        return []
        
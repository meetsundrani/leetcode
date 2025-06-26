class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen ={}
        for i,val in enumerate(nums):
            remain = target - val
            if remain in seen:
                return [i, seen[remain]]
            seen[val] = i
        return []
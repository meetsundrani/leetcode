class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        visited = [0] * len(nums)
        for i in nums:
                    if visited[i] == -1:
                        return i
                    visited[i] = -1
        return i
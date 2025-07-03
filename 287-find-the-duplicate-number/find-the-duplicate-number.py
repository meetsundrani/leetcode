class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        visited = {}
        for i in nums:
            if i in visited:
                return i
            visited[i] = 1
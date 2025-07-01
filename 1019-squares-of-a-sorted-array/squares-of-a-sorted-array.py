class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        sqr = [num ** 2 for num in nums]
        sqr.sort()
        return sqr
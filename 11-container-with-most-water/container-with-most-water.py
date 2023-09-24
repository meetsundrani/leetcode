class Solution:
    def maxArea(self, height: List[int]) -> int:
        res = 0
        l = 0
        r = len(height)
        while l < r:
            area = min(height[r-1], height[l]) * ((r-1)-l)
            res = max(res,area)
            if height[l] < height[r-1]:
                l+=1
            else:
                r-=1
        return res
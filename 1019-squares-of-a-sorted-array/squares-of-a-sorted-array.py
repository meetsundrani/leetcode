class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        n = len(nums)
        l, h = 0, n-1
        res = [0]*n
        ind = n-1
        
        while h > -1 and ind >-1:
            if abs(nums[l]) > abs(nums[h]):
                res[ind] = nums[l] * nums[l]
                l +=1
            else:
                res[ind] = nums[h] * nums[h]
                h -= 1
            ind -= 1
        return res
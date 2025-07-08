class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        closetSum = sum(nums[:3])
        for i in range(len(nums)-2):
            l,r = i+1, len(nums)-1
            while l < r:
                sums = nums[i] + nums[l] + nums[r]
                if abs(target - sums) < abs(target - closetSum):
                    closetSum = sums

                if sums == target:
                    return target
                elif sums < target:
                    l += 1
                else:
                    r -= 1
        return closetSum

                
                
        
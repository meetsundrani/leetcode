class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_length = 0
        seen = {}
        left = 0

        for i in range(len(s)):
            if s[i] in seen and seen[s[i]] >= left:
                left = seen[s[i]] + 1
            seen[s[i]] = i
            max_length = max(max_length, i - left + 1)
        return max_length
        
import sys
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        price = prices[0]
        profit = 0
        for i in prices:
            price = min(price, i)
            profit = max(profit, (i - price))
        return profit
class Solution:
    def fib(self, n: int) -> int:
        @cache
        def sol(n):
            if n == 0 or n == 1:
                return n 

            return sol(n-1) + sol(n-2)
        return sol(n)
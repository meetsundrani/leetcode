import re
class Solution:
    def validateCoupons(self, code: List[str], businessLine: List[str], isActive: List[bool]) -> List[str]:
        valid_businessLine = ["electronics", "grocery", "pharmacy", "restaurant"]
        order = {buisLine: i for i, buisLine in enumerate(valid_businessLine)}
        print(order)
        valid = []

        for c, b, a in zip(code, businessLine, isActive):
            if (c and re.fullmatch(r'[A-Za-z0-9_]+', c)
                and b in valid_businessLine
                and a is True):
                valid.append((order[b], b, c))

        valid.sort(key=lambda x: (x[0], x[2]))

        return [c for _, _, c in valid]


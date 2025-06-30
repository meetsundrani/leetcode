class Solution:
    
    def backspaceCompare(self, s: str, t: str) -> bool:
        l1 = []
        l2 = []
        for i in s:
            if i != '#':
                l1.append(i)
            else:
                if len(l1)!=0:
                    l1.pop()
        for i in t:
            if i != '#':
                l2.append(i)
            else:
                if len(l2) !=0:
                    l2.pop()

        if ''.join(l1) == ''.join(l2):
            return True
        else:
            return False
            

   
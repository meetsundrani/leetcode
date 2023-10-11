from collections import defaultdict 
class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        pairs = 0
        dur = collections.defaultdict(int)
        
        for i in time:
            if not (i % 60):
                pairs += dur[0]
            else:
                pairs += dur[60 - (i % 60)]
            dur[i % 60] += 1
        return pairs
                    
                
        
        
                
                
                
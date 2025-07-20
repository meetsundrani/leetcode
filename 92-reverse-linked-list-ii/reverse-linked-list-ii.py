# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: ListNode, left: int, right: int) -> ListNode:
        if not head or left == right:
            return head

        # Step 1: Store values from left to right
        values = []
        current = head
        position = 1
        while current:
            if left <= position <= right:
                values.append(current.val)
            current = current.next
            position += 1

        # Step 2: Rewrite values in reverse
        current = head
        position = 1
        index = len(values) - 1
        while current:
            if left <= position <= right:
                current.val = values[index]
                index -= 1
            current = current.next
            position += 1

        return head

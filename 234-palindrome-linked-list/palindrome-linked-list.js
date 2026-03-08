/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let low = head
    let high = head
    while(high && high.next) {
        high = high.next.next
        low = low.next
    }
    let prev, temp
    prev = low, low = low.next, prev.next = null
    while(low)
    temp = low.next, low.next = prev, prev = low, low = temp

    high = head, low = prev
    while(low)
    if(high.val !== low.val) return false
    else high = high.next, low = low.next
    return true
};
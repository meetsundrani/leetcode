/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(null, head)
    let prev = dummy, curr =head;
    while(curr){
        let nxt = curr.next;
        console.log(prev.val, curr.val)
        if(prev.val !== curr.val){
            prev = curr
        } else {
            prev.next = nxt
        }
        curr = nxt
    }
    return dummy.next
};
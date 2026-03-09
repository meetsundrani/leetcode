/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let prev = dummy, curr = head;
    let size = 0;
    let indx = 0;
    while(curr){
        curr = curr.next
        size++
    }
    curr = head;
    while(curr){
        const remInd = size - n;
        let nxt = curr.next;
        if(remInd === indx){
            prev.next = nxt;
        } else{
            prev = curr;
        }
        curr = nxt
        indx++
    }
    return dummy.next
};
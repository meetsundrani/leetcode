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
    let counter = 0;
    while(curr){
        curr = curr.next
        counter++;
    }
    curr = head
    let ind = 0
    while(curr){
        const remInd = counter - n;
        let nxt = curr.next
        if(ind === remInd){
            prev.next = nxt;
        } else{
            prev = curr
        }
        curr = nxt
        ind++;
    }
    return dummy.next
};
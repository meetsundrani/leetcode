/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head
    let size = 1;
    let dummy = head;
    while(dummy.next){
        dummy = dummy.next;
        size++;
    }

    let curr = head;
    let pos = k % size;

    if(pos === 0) return head;
    for(let i = 0; i< size - pos - 1; i++){
        curr = curr.next;
    }

    let newNode = curr.next;
    curr.next = null;
    dummy.next = head;

    return newNode;
};
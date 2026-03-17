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
var swapPairs = function(head) {
    if(!head) return head
   let dummy = new ListNode(0,head);
   let prev = dummy, curr = head;
   while(curr && curr.next){
    let nxtPair = curr.next.next;
    let snd = curr.next;

    snd.next = curr;
    curr.next = nxtPair;
    prev.next = snd;

    prev = curr;
    curr = nxtPair;
   }
   return dummy.next;
};

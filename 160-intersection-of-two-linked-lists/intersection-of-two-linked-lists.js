/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let list1 = headA;
  let list2 = headB;
  while(list1 !== list2){
    list1 = list1 === null ? headB: list1.next;
    list2 = list2 === null ? headA: list2.next;
  }
  return list2;
};
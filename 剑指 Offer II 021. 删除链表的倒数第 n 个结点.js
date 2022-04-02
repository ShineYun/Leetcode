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
    let tmp = head,cnt = 0;
    while(tmp!=null){
        tmp = tmp.next;
        cnt++;
    }
    tmp = head;
    if(cnt == n)
        return tmp.next;
    let target =cnt - n - 1;
    tmp = head;
    while(target != 0){
        target--;
        tmp = tmp.next;
    }
    tmp.next = tmp.next.next;
    return head;
};
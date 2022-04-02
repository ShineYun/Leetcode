/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reverseList = function(head) {
    let res = null,tmp = null;
    while(head != null){
        tmp = head;
        head = head.next;
        tmp.next = res;
        res = tmp;
    }
    return res;
};

var reorderList = function(head) {
    let cnt=0,pos=0;
    let tmp1 = new ListNode();
    let l1 = tmp1;    //头指针l1 : l1 -> 0-2-4-....., l2->1-3-5....
    let tmp=head;
    while(tmp!=null){
        cnt++;
        tmp = tmp.next;
    }
    pos = parseInt(cnt/2) + ((cnt%2==1)?1:0);
    console.log(pos);
    while(head != null && pos !=0){
        tmp1.next = head;
        head = head.next;
        tmp1 = tmp1.next;
        tmp1.next = null;
        pos--;
    }
    let l2 = head;
    l2 = reverseList(l2); //reverser linklist
    l1 = l1.next;   //give up head-node -> linklist
    tmp = new ListNode();
    let res = tmp;
    while(l1 != null && l2 !=null){
        tmp.next = l1;
        tmp = tmp.next;
        l1 = l1.next;
        tmp.next = null;

        tmp.next = l2;
        tmp = tmp.next;
        l2 = l2.next;
        tmp.next = null;
    }
    if(l1 != null){
        tmp.next = l1;
        tmp.next.next = null;
    }
    return res.next;

};
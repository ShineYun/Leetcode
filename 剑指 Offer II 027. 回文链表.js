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
 var reverseList = function(head) {  //反转列表
    let res = null,tmp = null;
    while(head != null){
        tmp = head;
        head = head.next;
        tmp.next = res;
        res = tmp;
    }
    return res;
};
var isPalindrome = function(head) {
    let cnt=0;
    let tmp = head;
    while(tmp != null){
        cnt++;
        tmp = tmp.next;
    }
    if(cnt==1)  //特判链表长度1时为真
        return true;
    let div = parseInt(cnt/2);
    let pos = div + ((cnt%2==1)?1:0);   //处理奇偶列表

    let l2;
    let l1=head;
    tmp = head;
    for(let i=0;i<cnt;i++){ //寻找右回文部分
        if(i<pos){
            tmp = tmp.next;
            continue;
        }
        else{
            l2 = tmp;
            break;
        }
        
    }
    l2 = reverseList(l2);   //反转右链表后左右回文链表顺序一致顺序，依次判断即可
    while(div>0){
        if(l1.val != l2.val)    //
            return false;
        l1 = l1.next;
        l2 = l2.next;
        div--;
    }
    return true;
};
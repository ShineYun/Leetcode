/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
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

var addTwoNumbers = function(l1, l2) {
    let new_l1 = reverseList(l1);
    let new_l2 = reverseList(l2);
    let res = new ListNode(),tmp = new ListNode();
    res.next = tmp;
    let flag = false; //进位标志
    while(new_l1 !=null || new_l2 != null){
        if(new_l1 === null){
            while(new_l2 != null){
                let value =  new_l2.val + ((flag) ? 1 : 0);
                flag = (value >= 10)?true:false;
                value %= 10;   
                tmp.next = new ListNode(value);
                tmp = tmp.next;
                new_l2 = new_l2.next;
            }
        }else if(new_l2 === null){
                while(new_l1 != null){
                    let value =  new_l1.val + ((flag) ? 1 : 0);
                    flag = (value >= 10)?true:false;
                    value %= 10;   
                    tmp.next = new ListNode(value);
                    tmp = tmp.next;
                    new_l1 = new_l1.next;
            }
        }else{
            let value = new_l1.val + new_l2.val + ((flag) ? 1 : 0);
            flag = (value >= 10)?true:false;
            value %= 10;
            tmp.next = new ListNode(value);
            tmp = tmp.next;
            new_l1 = new_l1.next;
            new_l2 = new_l2.next;
        }
    }
    res =  reverseList(res.next.next);
    if(flag){
        tmp = new ListNode(1);
        tmp.next =res;
        return tmp;
    }
    return res;
};
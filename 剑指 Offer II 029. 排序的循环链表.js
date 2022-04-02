/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
 var insert = function(head, insertVal) {
    if(head == null){
        head= new Node(insertVal,null);
        head.next = head;
        return head;
    }
    let set = new Set();    //used to jump loop
    let tmp = head;
    let small_node = null;
    let cnt=0;
    while(!set.has(tmp)){
        small_node = (small_node==null)? tmp:
                     (small_node.val<=tmp.val)? small_node:tmp;
        cnt++;
        set.add(tmp);
        tmp = tmp.next;
    }
    tmp = small_node;
    let flag = true;
    while(cnt -1 >0){
        if(tmp.val <= insertVal && insertVal <= tmp.next.val){
            let new_node = new Node(insertVal,null);
            new_node.next = tmp.next;
            tmp.next = new_node;
            flag=false;
            break;
        }
        cnt--; 
        tmp = tmp.next;
    }
    if(flag){//说明加到尾部即可
        let new_node = new Node(insertVal,null);
        new_node.next = tmp.next;
        tmp.next = new_node;
    }
    return head;
};
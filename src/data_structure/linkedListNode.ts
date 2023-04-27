/**
 * Linked List Node
 */

export default class ListNode {
    val: any;
    next: any;
    constructor(val:any, next:any = null){
        this.val = val;
        this.next = next;
    }
}
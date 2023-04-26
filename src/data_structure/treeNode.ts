/**
 * Structure for a Binary Tree node
 */

export default class TreeNode {
    left: any;
    right: any;
    val: any;
    constructor(val:any){
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
/**
 * Queue data structure
 */

// maintain an array
// enqueue, dequeue, first, isEmpty, size

export default class Queue {
    items: Array<any>;

    constructor() {
        this.items = [];
    }

    /**
     *  add new element to the queue
     * @param {*} element 
     */
    enqueue(element:any) {
        this.items.push(element);
    }

    /**
     * removed the first element in the queue
     * @returns {*} first element
     */
    dequeue():any {
        return this.items.shift();
    }

    /**
     * @returns {*} first element in the queue
     */
    first():any {
        return this.items[0];
    }

    /**
     * check if the queue is empty
     * @returns {*} boolean value
     */
    isEmpty():boolean {
        return this.items.length === 0;
    }

    /**
     * Return number of items in the queue
     * @returns {*} length of a queue
     */
    size():number {
        return this.items.length;
    }
}
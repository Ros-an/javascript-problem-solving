/**
 * Priority Queue
 * Binary Heap Implementation
 *
 * clear: Remove all the elements from this queue
 * offer: insert particular element into this queue
 * peek: Retrieve but does not remove the head of this queue or return null if the queue is empty
 * poll: Retrieve and removes the head of this  queue or return null if the queue is empty
 * toArray: returns an array containing all the elements in the queue in ascending order
 * size: returns number of elements in the queue
 * isEmpty: returns true/false depending on length of queue
 */

interface PriorityQueueProps {
    comparator?: (a: any, b: any) => number;
    initialValues?: Array<any>;
}
export default class PriorityQueue {
    comparator: (a: any, b: any) => number;
    data: Array<any>;
    constructor({
        comparator = (a, b) => a - b,
        initialValues = [],
    }: PriorityQueueProps = {}) {
        this.comparator = comparator;
        this.data = initialValues;
        this.heapify();
    }

    peek() {
        if (this.size() === 0) {
            return null;
        }
        return this.data[0];
    }

    offer(value: any) {
        this.data.push(value);
        this.bubbleUp(this.data.length - 1);
    }

    heapify() {
        if(this.size() > 0){
            // for elements at index above 0, so starts with i = 1
            for (let i = 1; i < this.data.length; i++) {
                this.bubbleUp(i);
            }
        }
    }

    poll() {
        if (this.size() === 0) {
            return null;
        }
        const head = this.data[0];
        const last = this.data.pop();

        if (this.size() > 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return head;
    }

    bubbleUp(pos: number) {
        while (pos > 0) {
            let parent = (pos - 1) >>> 1;
            if (this.comparator(this.data[pos], this.data[parent]) < 0) {
                let temp = this.data[parent];
                this.data[parent] = this.data[pos];
                this.data[pos] = temp;
                pos = parent;
            } else {
                break;
            }
        }
    }

    bubbleDown(pos: number) {
        let last = this.size() - 1;

        while (true) {
            let left = (pos << 1) + 1;
            let right = left + 1;
            let minIndex = pos;

            // comparating parent with left child
            if (
                left <= last &&
                this.comparator(this.data[left], this.data[minIndex]) < 0
            ) {
                minIndex = left;
            }
            // comparing right child with its left sibling
            if (
                right <= last &&
                this.comparator(this.data[right], this.data[minIndex]) < 0
            ) {
                minIndex = right;
            }

            if (minIndex !== pos) {
                let temp = this.data[minIndex];
                this.data[minIndex] = this.data[pos];
                this.data[pos] = temp;

                pos = minIndex;
            } else {
                break;
            }
        }
    }


    toArray():Array<any> | []{
        // slice creates a copy of array
        return this.data.slice(0).sort(this.comparator);
    }

    isEmpty():boolean {
        return this.size() === 0;    
    }

    size(): number {
        return this.data.length;
    }

    clear() {
        this.data = [];
    }
}

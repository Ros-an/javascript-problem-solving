/**
 * Stack
 */

export default class Stack {
    items: Array<any>;
    
    constructor(){
        this.items = []
    }

    push(element:any) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}
// push

// pop
// peek
// empty
// size
// clear
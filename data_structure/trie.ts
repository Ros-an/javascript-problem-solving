/**
 * A trie (pronounced "try"), also known as a prefix tree or digital tree, is a tree-like data structure used to store a set of strings or sequences.
 * Add few nore lines about trie and why its better than BST
 */

interface NodeProps {
    [key: string]: any;
}
interface RootProps {
    isEnd: boolean;
    children: NodeProps;
}

class TrieNode {
    children: NodeProps;
    isEnd: boolean;
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

export default class Trie {
    root: RootProps;
    constructor() {
        this.root = new TrieNode();
    }
    // insert word
    insert(word: string) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in current.children)) {
                current.children[word[i]] = new TrieNode();
            }
            current = current.children[word[i]];
        }
        current.isEnd = true;
    }
    // search word
    search(word: string):boolean {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in current.children)) {
                return false;
            }
            current = current.children[word[i]];
        }
        return current.isEnd;
    }
    // start with word
}

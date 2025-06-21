class TrieNode {
  constructor() {
    this.children = {};         // Map of characters to TrieNode
    this.isEndOfWord = false;   // True if the node represents end of a word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(); // Root kept empty always
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char]; // similar to ptr = ptr.next
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}


const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app"));   // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app"));   // true
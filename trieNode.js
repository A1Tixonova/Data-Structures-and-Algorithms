function TrieNode() {
    this.children = {} // table
    this.endOfWord = false
}

function Trie() {
    this.root = new TrieNode()
}

Trie.prototype.insert = function(word) {
    var current = this.root
    for (var i = 0; i < word.length; i++) {
        var ch = word.charAt(i)
        var node = current.children[ch]
        if (node == null) {
            node = new TrieNode()
            current.children[ch] = node
        }
        current = node
    }
    current.endOfWord = true // mark the current nodes endOfWord as true
}

Trie.prototype.search = function(word) {
    var current = this.root
    for (var i = 0; i < word.length; i++) {
        var ch = word.charAt(i)
        var node = current.children[ch]
        if (node == null) {
            return false // node doesn`t exist
        }
        current = node
    }
    return current.endOfWord
}

Trie.prototype.delete = function(word) {
    this.deleteRecursively(this.root, word, 0)
}

Trie.prototype.deleteRecursively = function(current, word, index) {
    if (index == word.length) {
        // when end of word is reached only delete if current.end of word is true
        if (!current.endOfWord) {
            return false
        }
        current.endOfWord = false
        // if current has no other mapping then return true
        return Object.keys(current.children).length == 0
    }
    var ch = word.charAt(index),
        node = current.children[ch]
    
    if (node == null) {
        return false
    }

    var shouldDeleteCurrentNode = this.deleteRecursively(node, word, index + 1)

    // if true is returne then
    // delete the mapping of character and trienode reference from map
    if (shouldDeleteCurrentNode) {
        delete current.children[ch]
        // return true if no mappings are left in the map
        return Object.keys(current.children).length == 0
    }
    return false
    // Time complexity: O(W)
    // Space complexity: O(N*W)
}


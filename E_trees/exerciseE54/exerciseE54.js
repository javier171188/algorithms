'use strict';

class Trie {
    constructor() {
        this.root = {};
    }

    add_word(word, meaning) {
        let currentNode = this.root;
        for (let letter of word) {
            if (!(letter in currentNode)) {
                currentNode[letter] = {};
            }
            currentNode = currentNode[letter];
        }
        currentNode['meaning'] = meaning;
    }

    find_word(word) {
        let currentNode = this.root;

        for (let letter of word) {
            if (letter in currentNode) {
                currentNode = currentNode[letter];
            } else {
                return undefined;
            }
        }
        if ('meaning' in currentNode) {
            return currentNode['meaning'];
        }
        return undefined;
    }
}

function toTrie(dic) {
    const trieDic = new Trie();

    for (let word in dic) {
        trieDic.add_word(word, dic[word]);
    }

    return trieDic;
}

module.exports = toTrie;

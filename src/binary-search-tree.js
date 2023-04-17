const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {constructor() {
  this._root = null;
}

root() {
  return this._root;
}

add(data) {
  this._root = addWithin(this._root, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
}

has(data) {
  let current = this._root;
  while (current) {
    if (data === current.data) {
      return true;
    } else if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return false;
}

find(data) {
  let current = this._root;
  while (current) {
    if (data === current.data) {
      return current;
    } else if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
}

remove(data) {
  this._root = this._removeNode(this._root, data);
}

_removeNode(node, data) {
  if (!node) {
    return null;
  }
  if (data === node.data) {
    if (!node.left && !node.right) {
      return null;
    }
    if (!node.left) {
      return node.right;
    }
    if (!node.right) {
      return node.left;
    }
    let tempNode = node.right;
    while (tempNode.left) {
      tempNode = tempNode.left;
    }
    node.data = tempNode.data;
    node.right = this._removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = this._removeNode(node.left, data);
    return node;
  } else {
    node.right = this._removeNode(node.right, data);
    return node;
  }
}

min() {
  if (!this._root) {
    return null;
  }
  let current = this._root;
  while (current.left) {
    current = current.left;
  }
  return current.data;
}

max() {
  if (!this._root) {
    return null;
  }
  let current = this._root;
  while (current.right) {
    current = current.right;
  }
  return current.data;
}
}

module.exports = {
  BinarySearchTree
};
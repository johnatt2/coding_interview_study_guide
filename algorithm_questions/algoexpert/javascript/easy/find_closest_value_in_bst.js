/*
    Write a function that takes in a Binary Search Tree (BST) and a target integer
    value and returns the closest value to that target value contained in the BST.

    You can assume that there will only be one closest value.

    Each BST node has an integer value, a left child node, and a right child node.
    A node is said to be a valid BST node if and only if it satisfies the BST property:
    its value is strictly greater than the values of every node to its left; its value
    is less than or equal to the values of every node to its right; and its children nodes
    are either valid BST nodes themselves or None/null.
*/

// Solution 1.
// O(log(n)) time | O(1) space

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findClosestValueInBst(root, target) {
      return findClosestValueInBstHelper(root, target, root.value);
  }
  
  function findClosestValueInBstHelper(root, target, closestValue) {
      if (!root) return closestValue;
      if (Math.abs(closestValue - target) > Math.abs(root.value - target)) {
          closestValue = root.value;
      }
      if (root.value > target) {
          return findClosestValueInBstHelper(root.left, target, closestValue)
      } else if (root.value < target) {
          return findClosestValueInBstHelper(root.right, target, closestValue)
      } else {
          return closestValue;
      }
  }

//Solution 2.
// O(log(n)) time | O(1) space

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findClosestValueInBst(root, target) {
      if (!root) return -1;
      var closestValue = root.value;
      var currentNode = root;
      while (currentNode) {
          if (Math.abs(closestValue - target) > Math.abs(currentNode.value - target)) {
              closestValue = currentNode.value;
          }
          if (currentNode.value > target) {
              currentNode = currentNode.left;
          } else if (currentNode.value < target) {
              currentNode = currentNode.right;
          } else {
              break;
          }
      }
      return closestValue;
  }
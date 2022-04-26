const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.roott = null;
  }
  root() {
    return this.roott;
      }
    
      add(data) {
        let newNode = new Node(data);
        if (this.roott === null) {
            this.roott = newNode;
        } else {
            this.addNode(this.roott, newNode); 
        }
    }
      addNode(node, newNode) {
          if (newNode.data < node.data) {
              node.left ===null?node.left = newNode:this.addNode(node.left, newNode)
          } else {
    
              node.right === null?node.right = newNode:this.addNode(node.right, newNode)
          }
      }
    
      has( data ) {
    if(this.find(data)!==null){
      return true
    }else{
      return false
    }
      }
    
    
      find(data, node =this.roott ) {
        if(node==null){
          return null;
        }
        else if(data<node.data){
          return this.find(data,node.left)
        }else if(data>node.data){
          return this.find(data,node.right)
        }else{
          return node
        }
      }
    
      remove( data ) {
        this.roott = this.removeNode(this.roott, data)
      }
      findMinNode(node){
        if(node.left === null){
          return node
        }else{
          return this.findMinNode(node.left)
        }
      }
      removeNode(node, data){
        if(node === null){
          return null;
        } else if(data<node.data){
          node.left = this.removeNode(node.left, data);
          return node;
        } else if(data>node.data){
          node.right = this.removeNode(node.right, data);
          return node;
        }else{
          if(node.left === null && node.right === null){
            node = null;
            return node;
          }
          if(node.left === null){
            node = node.right;
            return node;
          }else if(node.right === null){
            node = node.left;
            return node;
          }
          let newNode = this.findMinNode(node.right);
          node.data = newNode.data;
          node.right = this.removeNode(node.right, newNode.data);
          return node;
        }
      }
    
      min(node = this.roott) {
        if (node.left === null)
            return node.data;
        else
            return this.min(node.left);
      }
    
      max(node = this.roott) {
        if(node.right === null){
          return node.data
        }else{
          return this.max(node.right)
        }
    
      }
}

module.exports = {
  BinarySearchTree
};
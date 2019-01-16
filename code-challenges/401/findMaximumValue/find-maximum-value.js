'use strict';

class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }

    addNode(n){
        if(n.value < this.value){
            if(this.left == null){
                this.left = n;
            }else{
                this.left.addNode(n);
            }
        }else if(n.value > this.value){
            if(this.right == null){
                this.right = n;
            }else{
                this.right.addNode(n);
            }
        }
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    addValue(val){
        let n = new Node(val);
        if(!this.root){
            this.root = n;
        }else{
            this.root.addNode(n);
        }
    }
}
let tree = new Tree();
tree.addValue(1);
tree.addValue(2);
tree.addValue(6);
tree.addValue(4);
tree.addValue(5);
tree.addValue(1);



function fmv(tree) {
  
  let q = [];
  q.push(tree.root);
  let highNum = 0;
  if (tree.root.value < 0) {highNum = tree.root.value;}
  while(q.length > 0){
    
    let current = q[0];
    console.log(current.value);
    if (current.value > highNum) { highNum = current.value; }
    console.log(highNum);
    if (current.left) { q.push(current.left); }
    if (current.right) { q.push(current.right); }
    q.shift();
  }
  return highNum;
}

console.log(fmv(tree));
module.exports = {fmv, Tree};
'use strict';

function fizzBuzzer(val) {
  if(val % 3 === 0 && val % 5 === 0) {
    val = 'fizzbuzz';
  } else if (val % 5 === 0) {
    val = 'buzz';
  } else if (val % 3 === 0) {
    val ='fizz';
  }
  return val;
}

function FizzBuzzTree(tree) {
  if(tree.root){
    let node = tree.root;
    let traverse = (node) => {
      node = fizzBuzzer(node);
      if(node.left) {
        traverse(node.left);
      }
      if(node.right) {
        traverse(node.right);
      }
    };
  } return tree;
}

'use strict';

class Stack {
  constructor() {
    this.stack = new Array();
    this.top = null;
  }

  push(value) {
    if(value!==undefined){
      this.stack.unshift(value);
      this.top = value;
    }
  }

  peek() {
    return this.top;
  }

  pop() {
    let value = this.stack.shift();
    this.top = this.stack[0];
    return value;
  }

}

module.exports = Stack;
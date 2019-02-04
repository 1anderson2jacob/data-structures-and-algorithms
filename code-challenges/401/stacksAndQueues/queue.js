'use strict';

class Queue {
  constructor() {
    this.queue = new Array();
  }
  enqueue(node) {
    if(node!==undefined) {
      this.queue.push(node);
    }
  }

  dequeue() {
    this.queue.shift();

  }

  peek() {
    this.queue[0];

  }

}

module.exports = Queue;
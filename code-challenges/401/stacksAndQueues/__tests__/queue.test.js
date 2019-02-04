'use strict';
const Queue = require('../queue.js');

class Node {
  constructor(value) {
    this.value = value;
  }
}

let node1 = new Node('a');
let node2 = new Node('b');
let node3 = new Node('c');

describe('Queue', () => {

  describe('peek()', () => {
    let peekQueue = new Queue();
    peekQueue.push(node1);
    peekQueue.push(node2);
    peekQueue.push(node3);
    it('shows the correct value after recieving an undefined value', () => {
      peekQueue.enqueue();
      let expected = peekQueue.peek();
      expect(expected).toEqual(node1);
    });
    it('shows the correct value after dequeue() is used', () => {
      peekQueue.dequeue();
      let expected = peekQueue.peek();
      expect(expected).toEqual(node2);
    });
  });

  describe('enqueue()', () => {
    let enqueueQueue = new Queue();
    enqueueQueue.enqueue(node1);
    enqueueQueue.enqueue(node2);
    enqueueQueue.enqueue(node3);
    it('adds a item to the top of the stack', () => {
      let expected = enqueueQueue.peek();
      expect(expected).toEqual(node1);
    });
    
    it('doesn\'t break on no values being passed', () => {
      enqueueQueue.enqueue();
      expect(enqueueQueue.peek()).toBeDefined();
    }); 

    it('accepts 0 values', () => {
      enqueueQueue.enqueue(0);
      expect(enqueueQueue.peek().value).toEqual(0);
    });
  });



  describe('dequeue()', () => {
    let dequeueQueue = new Queue();
    it('doesn\nt break the stack if dequeue() is used while empty', () => {
      dequeueQueue.dequeue();
      dequeueQueue.enqueue(node1);
      expect(dequeueQueue.peek()).toEqual(node1);
    });
  });
});
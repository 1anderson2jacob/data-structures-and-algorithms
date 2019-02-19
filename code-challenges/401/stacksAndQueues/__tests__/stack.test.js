'use strict';

const Stack = require('../stack.js');

describe('Stack', () => {

  describe('peek()', () => {
    let peekStack = new Stack();
    peekStack.push('a');
    peekStack.push('b');
    peekStack.push('c');
    it('shows the correct value after recieving an undefined value', () => {
      peekStack.push();
      let expected = peekStack.peek();
      expect(expected).toEqual('c');
    });
    it('shows the correct value after pop() is used', () => {
      peekStack.pop();
      let expected = peekStack.peek();
      expect(expected).toEqual('b');
    });
  });

  describe('push()', () => {
    let pushStack = new Stack();
    pushStack.push('a');
    pushStack.push('b');
    pushStack.push('c');
    it('adds a item to the top of the stack', () => {
      let expected = pushStack.peek();
      expect(expected).toEqual('c');
    });
    
    it('doesn\'t break on no values being passed', () => {
      pushStack.push();
      expect(pushStack.peek()).toBeDefined();
    }); 

    it('accepts 0 values', () => {
      pushStack.push(0);
      expect(pushStack.peek()).toEqual(0);
    });
  });



  describe('pop()', () => {
    let popStack = new Stack();
    it('doesn\nt break the stack if pop() is used while empty', () => {
      popStack.pop();
      popStack.push('a');
      expect(popStack.peek()).toEqual('a');
    });
  });
});
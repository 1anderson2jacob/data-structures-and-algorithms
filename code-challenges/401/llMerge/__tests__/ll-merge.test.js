'use strict';
console.log('test ');
const LL = require('../../linkedList/linked-list.js');
const merge = require('../ll-merge.js');

describe('Check that merged list', () => {
  it('should have same head.value as first list', () => {
    let l1 = new LL.LinkedList();
    let l2 = new LL.LinkedList();

    l1.append(1);
    l1.append(2);
    l1.append(3);
    l2.append(4);
    l2.append(5);
    l2.append(6);
    let expected = merge(l1,l2);

    expect(expected.value).toEqual(l1.head.value);
  });
  it('should have the same head type as the first list', () => {
    let l1 = new LL.LinkedList();
    let l2 = new LL.LinkedList();
    let expected = typeof merge(l1,l2).value;
    let type = typeof l1.head.value;
    expect(expected).toEqual(type);
  });
});

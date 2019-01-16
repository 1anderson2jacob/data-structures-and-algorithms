'use strict';
const fmv = require('../find-maximum-value.js');

let tree = new fmv.Tree();
tree.addValue(1);
tree.addValue(2);
tree.addValue(6);
tree.addValue(4);
tree.addValue(5);
tree.addValue(1);

let negTree = new fmv.Tree();
negTree.addValue(-1);
negTree.addValue(-2);
negTree.addValue(-3);
negTree.addValue(-4);
negTree.addValue(-5);

describe('find-maximum-value function'), () => {

  it('finds the correct maximum value in a tree', () => {
    expect(fmv.fmv(tree).toEqual(6));
  });

  it('works with negative numbers', () => {
    expect(fmv.fmv(tree).toEqual(-1));
  });
  it('finds the correct maximum value in a tree', () => {

  });

};
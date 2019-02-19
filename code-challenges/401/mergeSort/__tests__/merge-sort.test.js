'use strict';
let mergeSort = require('../merge-sort.js');
describe('mergeSort', () => {
  it('should correctly sort an array', () => {
    let arr = [5,6,3,4,1,2];
    let expected = mergeSort(arr);
    expect(expected).toEqual([1,2,3,4,5,6]);
  });
  it('should correctly sort a string', () => {
    let arr = ['d','c','a','b'];
    let expected = mergeSort(arr);
    expect(expected).toEqual(['a','b','c','d']);
  });
});
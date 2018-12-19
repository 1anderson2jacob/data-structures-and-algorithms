'use strict';

const search = require('./array-binary-search.js');

describe('binarySearch', () => {
  it('gives correct output given correct input', () => {
    expect(search.binarySearch([1,2,3], 2)).toEqual(1);
  });

  it('returns -1 if no elements share value of val', () => {
    expect(search.binarySearch([1,2,3], 4)).toEqual(-1);
  });

  it('returns null if array contains objects', () => {
    expect(search.binarySearch([{}], 4)).toEqual(null);
  });

});

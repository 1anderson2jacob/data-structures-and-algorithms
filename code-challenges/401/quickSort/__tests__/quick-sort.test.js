'use stric';

let quickSort = require('../quick-sort.js');

describe('quickSort', () => {
  it('correctly solves the happy path', () => {
    let expected = quickSort([5,3,4,6,1,7]);
    expect(expected).toEqual([1,3,4,5,6,7]);
  });
  it('accepts negative numbers', () => {
    let expected = quickSort([-5,3,4,6,1,7]);
    expect(expected).toEqual([-5,1,3,4,6,7]);
  });
  it('doesnt break on no input', () => {
    expect(quickSort([])).toEqual([]);
  });
});

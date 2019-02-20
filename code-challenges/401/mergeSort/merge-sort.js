'use strict';

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let midpoint = Math.floor(arr.length/2);
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint);

  return merge(mergeSort(right), mergeSort(left));
}

function merge(left, right) {
  let results = [];
  let leftCount = 0;
  let rightCount = 0;

  while(leftCount < left.length && rightCount < right.length) {
    if(left[leftCount] < right[rightCount]){
      results.push(left[leftCount]);
      leftCount++;
    } else {
      results.push(right[rightCount]);
      rightCount++;
    }
  }

  if (leftCount < left.length) {
    for (let i = leftCount; i < left.length; i++) {
      results.push(left[i]);
    }
  } else {
    for (let i = rightCount; i < right.length; i++) {
      results.push(right[i]);
    }
  }
  
  return results;
}

module.exports = mergeSort;
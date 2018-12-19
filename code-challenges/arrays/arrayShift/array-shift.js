'use strict';

function insertShiftArray(arr, val) {

  let mid = Math.floor((arr.length - 1) / 2);

  for (let i = arr.length - 1; i >= mid; i--) {
    arr[i + 1] = arr[i];

    if(i === mid) {
      arr[mid + 1] = val;
    }
  }
  return arr;
}

// let even = [1,2,3,4];
// let odd = [1,2,3,4,5];
// console.log(insertShiftArray(odd, 6));
// console.log(insertShiftArray(even, 6));
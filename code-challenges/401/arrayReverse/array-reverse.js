'use strict';

//let arreh = [1,2,3,4,5,6];

function reverseArray(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length-i - 1];
  }
  return newArr;
}

//reverseArray(arreh);


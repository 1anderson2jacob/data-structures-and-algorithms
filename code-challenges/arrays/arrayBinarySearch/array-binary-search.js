'use strict';
let binExport = module.exports = {};
binExport.binarySearch = (arr,val) => {
  let output = -1;

  if (typeof(arr[0]) === 'object') {
    output = null;
  }

  if(output!==null){
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        output = i;
      }
    }
  }

  return output;
};

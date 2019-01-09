'use strict';

function multiBracketValidation(str) {
  let bool = true;
  let linter = [];

  for(let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    let l = linter.length;
    if(c === '{' || c === '[' || c === '(') {
      linter[linter.length] = c;
    } else if (c === '}' || c === ']' || c === ')') {
      if (
        ((c === '}') && (linter [l-1] === '{'))
      || ((c === ']') && (linter [l-1] === '[')) 
      || ((c === ')') && (linter [l-1] === '('))
      ) {
        linter.length -= 1;
      } else {bool = false; }
    }
  }
  return bool;
}

module.exports = multiBracketValidation;
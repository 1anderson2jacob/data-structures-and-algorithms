'use strict';

const LL = require('../linkedList/linked-list.js');

function mergeLists(ll1, ll2) {

  let current1 = ll1.head;
  let current2 = ll2.head;
  let zipped = new LL.LinkedList();

  while(current1 || current2) {

    if( current1 ) {
      zipped.add(current1.value);
      current1 = current1.next;
    }

    if( current2 ) {
      zipped.add(current2.value);
      current1 = current2.next;
    }
  }
  return zipped.head;
}
module.exports = mergeLists;

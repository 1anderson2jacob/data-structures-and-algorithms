'use strict';
const LinkedList = require('../linkedList/linked-list');

class Hashtable {
  constructor() {
    this.table = [];
  }

  Add(key, value) {

    let tableIdx = this.GetHash(key);
    
    if (this.table[tableIdx] === undefined) {

      let bucket = new LinkedList();
      this.table[tableIdx] = bucket;
      bucket.append([key,value]);

    } else {

      console.log('inside else');       //console log
      let bucket = this.table[tableIdx];
      this.table[tableIdx] = bucket;
      bucket.append([key,value]);
      console.log(this.table[tableIdx]); //console log
    }

  }

  Find(key) {
    let tableIdx = this.GetHash(key);

    if (this.table[tableIdx] === undefined) {
      return 'key not found';
    } else {

      let bucket = this.table[tableIdx];
      let currentNode = bucket.head;
      while(currentNode.next) {
        if (key === currentNode.value[0]) { //currentNode.value[0] = key 
          return currentNode.value[1];   //currentNode.value[1] = value
        }
        currentNode = currentNode.next;
      }

    }
  }

  Contains(key) {
    /*
    The Contains method will accept a key, and return a bool on if that key exists inside the hashtable. The best way to do this is to have the contains call the GetHash and check the hashtable if the key exists in the table given the index returned.*/

    let tableIdx = this.GetHash(key);

    if (this.table[tableIdx] === undefined) {
      return false;
    } else {
      return true;
    }
  }

  GetHash(key) {
    let asciiCount = 0;

    for(let i = 0; i < key.length; i++) {
      asciiCount += key.charCodeAt[i];
    }

    asciiCount = Math.floor(asciiCount * 599);
    asciiCount = Math.floor(asciiCount/key.length);
    
    return asciiCount;
  }
}

let ht = new Hashtable();

ht.Add('hey', 'you');
ht.Add('they', 'mi');
ht.Add('hey', 'thi');

console.log(ht.Find('hey'));
console.log(ht.Contains('bfoshow'));
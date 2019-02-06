'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value){ // at beginning
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value) {
    let current = this.head;
    while(current.next) {
      if(current.value === value) { return true; }
    }
    
  }

  print() {
    let current = this.head;

    while(current.next) {
      console.log(current.value);
      current = current.next;
    }
    console.log(current.value);
  }

  append(value) {
    let node = new Node(value);
    let current = this.head;

    while(current.next) {
      current = current.next;
    }

    current.next = node;
  }

  insertBefore(oldVal, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    let preNode = current;

    while (current.value !== oldVal) {
      preNode = current;
      current = current.next;
    }
    node.next = current;

    if (preNode) { //if preNode isn't null
      preNode.next = node;   //set preNode.next to node
    } else { //preNode is null
      node.next = this.head;
      this.head = node;
    }

  }

  insertAfter(oldVal, newVal) {
    let node = new Node(newVal);
    let current = this.head;

    while(current.value !== oldVal) {
      current = current.next;
    }

    node.next = current.next;   
    current.next = node;
  }
}

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }

}

let list = new LinkedList();
list.insert('e');
list.insert('d');
list.insert('c');
list.insert('b');
list.insert('a');


// list.includes()
list.insertBefore('a', 'inserted-value');
// list.insertAfter('c', 'after c');

list.print();
'use strict';

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.items.length < 1) {
      return null;
    } else {
      return this.items.shift();
    }
  }
  front() {
    if (this.items.length < 1) {
      return null;
    } else {
      return this.items[0];
    }
  }
}

class AnimalShelter {
  constructor() {
    this.q1 = new Queue();
  }
  enqueue(value) {
    this.q1.enqueue(value);
  }
  dequeue(pref) {
    if (!pref) {
      return null;
    }
    let q2 = new Queue();
    while (!(this.q1.front().type === pref)) {
      q2.enqueue(this.q1.dequeue());
    }
    let temp = this.q1.dequeue();
    while (q2.front()) {
      this.q1.enqueue(q2.dequeue());
    }
    return temp;
  }
}
module.exports = AnimalShelter;


// let test = new AnimalShelter();
// test.enqueue({ name: "buddy", type: "dog" });
// test.enqueue({ name: "fred", type: "cat" });
// test.enqueue({ name: "garfield", type: "cat" });
// test.enqueue({ name: "odie", type: "dog" });
// test.dequeue("cat");

// console.log(test);

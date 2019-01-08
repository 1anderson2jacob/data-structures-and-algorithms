'use strict';

const AnimalShelter = require('../fifo-animal-shelter');

describe('running tests on animal shelter', () => {
  it('can take in a animal using enqueue', () => {
    let test = new AnimalShelter();
    test.enqueue({ name: 'buddy', type: 'dog' });
    test.enqueue({ name: 'tanner', type: 'cat' });
    test.enqueue({ name: 'jacob', type: 'dog' });
    expect(test.length).toEqual(3);
  });
  it('can take remove the correct animal based on type', () => {
    let test = new AnimalShelter();
    test.enqueue({ name: 'buddy', type: 'dog' });
    test.enqueue({ name: 'tanner', type: 'cat' });
    test.enqueue({ name: 'jacob', type: 'dog' });
    expect(test.dequeue('cat')).toEqual({ name: 'tanner', type: 'cat' });
  });
  it('can return null if no pref is inputed in dequeue', () => {
    let test = new AnimalShelter();
    test.enqueue({ name: 'buddy', type: 'dog' });
    test.enqueue({ name: 'tanner', type: 'cat' });
    test.enqueue({ name: 'jacob', type: 'dog' });
    expect(test.dequeue()).toEqual(null);
  });
})
'use strict';

let linter = require('multi-bracket-validation.js');

describe('linter', () => {
  it('returns false if each opening closure doesnt have a corrisponding closing closure', () => {
    expect(linter('{]').toBeFalsy());
  });
  it('returns true if each opening close does have a closing closure', () => {
    expect(linter('{[]}').toBeTruthy());
  });
  it('returns true if there are non closure characters in the string and the closures are still properly closed', () => {
    expect(linter('()[[abc]]').toBeTruthy());
  });
});
'use strict';

const MOCK = {
  params: {
    foo: 'bar',
    num1: 456,
    num2: '789',
    notNum: 'oneTwOThree'
  }
};

let numerizer = require('../lib/');
let assert = require('assert');

describe('Request Numerizer Tests', () => {
  //--------------------------------------------------------------------------
  before(done => {
    numerizer(MOCK, null, done);
  });

  //--------------------------------------------------------------------------
  it('"Foo" should keep a string value', () => {
    assert.strictEqual(MOCK.params.foo, 'bar');
  });

  //--------------------------------------------------------------------------
  it('"Num1" should keep a numeric value equal to 456', () => {
    assert(!isNaN(MOCK.params.num1));
    assert.strictEqual(MOCK.params.num1, 456);
  });

  //--------------------------------------------------------------------------
  it('"Num2" should have a transformed numeric value equal to 789', () => {
    assert(!isNaN(MOCK.params.num2));
    assert.strictEqual(MOCK.params.num2, 789);
  });

  //--------------------------------------------------------------------------
  it('"NotNum" should keep a string value equal to "oneTwOThree"', () => {
    assert(isNaN(MOCK.params.notNum));
    assert.strictEqual(MOCK.params.notNum, 'oneTwOThree');
  });
});
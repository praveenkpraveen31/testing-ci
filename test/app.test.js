const { expect } = require('chai');
const add = require('../app');

describe('Addition Test', () => {
  it('should return 5 when adding 2 and 3', () => {
    expect(add(2, 3)).to.equal(5);
  });
});
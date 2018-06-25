const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('expects colNum to be positive', () => {
    expect(() => wrap('mystring', -1)).to.throw();
  });
  it('expects string to not be null', () => {
    expect(() => wrap(null, 5)).to.throw();
  });
  it('length of string is less than colNum, returns string', () => {
    expect(wrap('mystring', 12)).to.equal('mystring');
  });
  it('length of string is greater than colNum, returns wrapped string', () => {
    expect(wrap('mystring', 5)).to.equal('mystr\ning');
  });
  it('should wrap a very long string', () => {
    const string = '1234512345123451234512345';
    const result = '12345\n12345\n12345\n12345\n12345';
    expect(wrap(string, 5)).to.equal(result);
  });
});

const main = require('./main.js');

describe('sum', function() {
  it('should display right text content', function() {
    var result = main.sum(1, 1)
    expect(result).to.equal(2);
  });
});
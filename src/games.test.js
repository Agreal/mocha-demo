const {getSnakeOrder} = require('./games');

describe('get snake order', function () {
  it('final game', () => {
    const result = getSnakeOrder(2);
    expect(result).to.eql([1, 2]);
  });

  it('1/2 game', () => {
    const result = getSnakeOrder(4);
    expect(result).to.eql([1, 4, 3, 2]);
  });

  it('1/4 game', () => {
    const result = getSnakeOrder(8);
    expect(result).to.eql([1, 8, 5, 4, 3, 6, 7, 2]);
  });

  it('1/8 game', () => {
    const result = getSnakeOrder(16);
    expect(result).to.eql([1, 16, 9, 8, 5, 12, 13, 4, 3, 14, 11, 6, 7, 10, 15, 2]);
  });

  it('32 game', () => {
    const result = getSnakeOrder(32);
    expect(result).to.eql([1, 32, 17, 16, 9, 24, 25, 8, 5, 28, 21, 12, 13, 20, 29, 4, 3, 30, 19, 14, 11, 22, 27, 6, 7, 26, 23, 10, 15, 18, 31, 2]);
  });

  it('64 game', () => {
    const result = getSnakeOrder(64);
    expect(result).to.eql([1, 64, 33, 32, 17, 48, 49, 16, 9, 56, 41, 24, 25, 40, 57, 8, 5, 60, 37, 28, 21, 44, 53, 12, 13, 52, 45, 20, 29, 36, 61, 4, 3, 62, 35, 30, 19, 46, 51, 14, 11, 54, 43, 22, 27, 38, 59, 6, 7, 58, 39, 26, 23, 42, 55, 10, 15, 50, 47, 18, 31, 34, 63, 2]);
  });

});

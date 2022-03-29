const {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
} = require('../challenges/katas');

// MATHS
describe('Basic Maths', () => {
  it('mod returns the remainder of dividing a by b', () => {
    expect(modulo(4, 2)).toEqual(0);
    expect(modulo(7, 2)).toEqual(1);
  });

  it('squareRoot returns the square root of n', () => {
    expect(squareRoot(4)).toEqual(2);
    expect(squareRoot(16)).toEqual(4);
  });

  it('raiseToPower returns m to the nth power§', () => {
    expect(raiseToPower(2, 3)).toEqual(8);
    expect(raiseToPower(3, 4)).toEqual(81);
    expect(raiseToPower(8, 0)).toEqual(1);
  });
});

describe('formatMoney', () => {
  it('adds zeroes up to 2 decimal numbers', () => {
    expect(formatMoney(1)).toEqual('£1.00');
  });
  it('rounds to 2 decimal numbers', () => {
    expect(formatMoney(3.457)).toEqual('£3.46');
  });
});

describe('calculateCircleArea', () => {
  it('returns the area of a circle', () => {
    expect(calculateCircleArea(1)).toEqual(3.142);
    expect(calculateCircleArea(2)).toEqual(12.566);
    expect(calculateCircleArea(3)).toEqual(28.274);
  });
});

describe('calculateFullTurns', () => {
  it('returns the amount of full turns you can make with the passed degrees', () => {
    expect(calculateFullTurns(90)).toEqual(0);
    expect(calculateFullTurns(363)).toEqual(1);
    expect(calculateFullTurns(800)).toEqual(2);
    expect(calculateFullTurns(2000)).toEqual(5);
  });
});

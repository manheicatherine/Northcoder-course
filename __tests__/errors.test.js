const { getFirstItem } = require('../problem-solving/find-error');

describe('getFirstItem', () => {
  it('returns first item in the array', () => {
    expect(getFirstItem([1, 2, 3, 4])).toEqual(1);
    expect(getFirstItem(['black', 'khaki', 'cyan'])).toEqual('black');
  });
});

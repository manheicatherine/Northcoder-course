const { isSweetEnough } = require('../problem-solving/refactoring');

describe('isSweetEnough', () => {
  it('returns true when all foods are sweet', () => {
    const foodArray = [
      { name: 'chocolate', flavour: 'sweet' },
      { name: 'banana', flavour: 'sweet' },
      { name: 'barfi', flavour: 'sweet' },
    ];
    expect(isSweetEnough(foodArray)).toBe(true);
  });
  it('returns false when no foods are sweet', () => {
      const foodArray = [
          {name: 'samosa', flavour: 'savoury'},
          {name: 'lemon', flavour: 'sour'},
          {name: 'olive', flavour: 'bitter'}
      ]
      expect(isSweetEnough(foodArray)).toBe(false);
  });
  it('returns false when not all foods are sweet', () => {
    const foodArray = [
        {name: 'stollen', flavour: 'sweet'},
        {name: 'cranberries', flavour: 'sour'},
        {name: 'mince pie', flavour: 'sweet'}
    ]
    expect(isSweetEnough(foodArray)).toBe(false);
});
});

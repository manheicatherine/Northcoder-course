const {
  getFirstItem,
  countCharactersInString,
  splitString,
  countWordsInSentence
} = require('../problem-solving/errors');

describe('getFirstItem', () => {
  it('returns first item in the array', () => {
    expect(getFirstItem([1, 2, 3, 4])).toEqual(1);
    expect(getFirstItem(['black', 'khaki', 'cyan'])).toEqual('black');
  });
});

describe('splitString', () => {
  it('returns a string as individual letters in an array', () => {
    expect(splitString('string')).toEqual(['s', 't', 'r', 'i', 'n', 'g']);
    expect(splitString('help')).toEqual(['h', 'e', 'l', 'p']);
    expect(splitString('northcoders')).toEqual([
      'n',
      'o',
      'r',
      't',
      'h',
      'c',
      'o',
      'd',
      'e',
      'r',
      's',
    ]);
  });
});

describe('countCharactersInString', () => {
  it('returns the number of times the character appears in the string', () => {
    expect(countCharactersInString('string', 's')).toBe(1);
    expect(countCharactersInString('hello', 'l')).toBe(2);
    expect(
      countCharactersInString('she sells seashells by the seashore', 's')
    ).toBe(8);
  });
});

describe('countWordsInSentence', () => {
  it('returns count of words in sentence', () => {
    expect(countWordsInSentence('hello my name is Poonam')).toBe(5)
    expect(countWordsInSentence('and I love coding')).toBe(4)
    expect(countWordsInSentence('a long time ago, in a galaxy far away')).toBe(9)
  });
});
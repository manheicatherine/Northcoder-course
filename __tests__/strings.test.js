const {
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
} = require('../challenges/katas');

// STRINGS
describe('getLength', () => {
  it('returns the length of the passed string', () => {
    expect(getLength('')).toEqual(0);
    expect(getLength('hello')).toEqual(5);
    expect(getLength('hello northcoders')).toEqual(17);
  });
});

describe('putNamesTogether', () => {
  it('returns the passed names separated by a space', () => {
    expect(putNamesTogether('Kevin', 'Durant')).toEqual('Kevin Durant');
    expect(putNamesTogether('Stephen', 'Curry')).toEqual('Stephen Curry');
  });
});

describe('capitaliseString', () => {
  it('returns the passed string with the first letter capitalised', () => {
    expect(capitaliseString('hello')).toEqual('Hello');
    expect(capitaliseString('hello northcoders')).toEqual('Hello northcoders');
  });
});

describe('dontShoutSentence', () => {
  it('returns the passed sentence in lower case, keeping the first char capitalised', () => {
    expect(dontShoutSentence('HELLO NORTHCODERS!!!')).toEqual(
      'Hello northcoders!!!',
    );
  });
});

describe('getMiddle', () => {
  it('returns the middle character of an odd length string', () => {
    expect(getMiddle('abc')).toEqual('b');
  });
  it('returns the middle character of an odd length string', () => {
    expect(getMiddle('abcde')).toEqual('c');
  });
  it('returns the middle two chracters of an even length string', () => {
    expect(getMiddle('aabbcc')).toEqual('bb');
  });
});

describe('getLastWord', () => {
  it('returns the last word of the passed sentence', () => {
    expect(getLastWord('hello')).toEqual('hello');
    expect(getLastWord('hello northcoders')).toEqual('northcoders');
    expect(getLastWord('hello northcoders, what is going on')).toEqual('on');
  });
});

describe('hyphenateWords', () => {
  it('returns the passed string with spaces replaced by hyphens', () => {
    expect(hyphenateWords('hello')).toEqual('hello');
    expect(hyphenateWords('hello northcoders')).toEqual('hello-northcoders');
    expect(hyphenateWords('what is going on')).toEqual('what-is-going-on');
  });
});

describe('convertToCamelCase', () => {
  it('returns the passed string convertedToCamelCase', () => {
    expect(convertToCamelCase('hello')).toEqual('hello');
    expect(convertToCamelCase('hello northcoders')).toEqual('helloNorthcoders');
    expect(convertToCamelCase('what is going on')).toEqual('whatIsGoingOn');
  });
  it('The very first letter should always be lower case', () => {
    expect(convertToCamelCase('Hello')).toEqual('hello');
    expect(convertToCamelCase('I start lower cased')).toEqual(
      'iStartLowerCased',
    );
  });
});

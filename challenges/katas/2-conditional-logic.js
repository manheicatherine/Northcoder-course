// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function areValuesEqual(left, right) {
  // return true if the passed arguments are strictly equal
  if(left === right){
    return true;
  } else {
    return false;
  }
}

function areValuesNotEqual(left, right) {
  // return true if the passed arguments are NOT equal
  if(left !== right){
    return true;
  }
  return false;
}

function isFromThe60s(year) {
  // return true if the year is in the 1960's
  if(year >= 1960 && year <= 1969){
    return true;
  } else {
    return false;
  }
}

function isEvenLength(string) {
  // return true if string has an even length
  if(string.length % 2 === 0){
    return true;
  } else {
    return false;
  }
}

function areStringsEqualCaseInsensitive(left, right) {
  // return true if the passed strings are equal ignoring case
  //hello HELLO
  //hello hello
  if(left.toLowerCase() === right.toLowerCase()){
    return true;
  } else {
    return false;
  }
}

// ---------- Do not change the code below this line --------------
module.exports = {
  areValuesEqual,
  areValuesNotEqual,
  isFromThe60s,
  isEvenLength,
  areStringsEqualCaseInsensitive,
};

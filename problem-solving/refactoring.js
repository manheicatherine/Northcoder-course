// Refactor isSweetEnough to use the higher order function, every. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function isSweetEnough(foodArray) {
  // this function returns true if ALL foods are sweet
  for (let i = 0; i < foodArray.length; i++) {
    if (foodArray[i].flavour !== 'sweet') {
      return false;
    }
  }
  return true;
}

/*

    x 3

    katas already written with lower level method (passing tests) -> refactor this to use map / filter
    bad variable names 
    unnecessary variables

    eventually refactor this to use higher order method (point to docs)

*/
module.exports = { isSweetEnough };

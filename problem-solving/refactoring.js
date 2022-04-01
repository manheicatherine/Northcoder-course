// TASK 1
// Refactor shoutNames to use the higher order function, map, instead of the for loop. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function shoutNames(names) {
  // shoutNames capitalises all the names and returns them in a new array.
  const shoutyArray = [];
  for (let i = 0; i < names.length; i++) {
    const upperCaseName = names[i].toUpperCase();
    shoutyArray.push(upperCaseName);
  }
  return shoutyArray;
}

// TASK 2
// Refactor isSweetEnough to use the higher order function, every. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function isSweetEnough(foodArray) {
  // isSweetEnough returns true if ALL foods are sweet.
  for (let i = 0; i < foodArray.length; i++) {
    if (foodArray[i].flavour !== 'sweet') {
      return false;
    }
  }
  return true;
}

// TASK 3
// Refactor isShrekCharacter to use a higher order function and tidy up the code.

function isShrekCharacter(characters) {
  // isShrekCharacter receives an array of characters and *only* returns the characters from the Shrek franchise in a new array.
  console.log(characters);
  const x = [];

  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
    if (characters[i].movie.includes('Shrek')) {
      x.push(characters[i]);
    }
  }
  return x;
}

// NOTE: Remember to remove any unused variables or console logs from the code.
module.exports = { isSweetEnough, shoutNames, isShrekCharacter };

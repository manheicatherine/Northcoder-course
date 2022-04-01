// Work through these challenges in order, regularly running the tests until they all pass!

// TASK 1  
function getFirstItem(arr) {
  // getFirstItem returns the first item in the array
  const firstItem = arr[0];

  return firstitem;
}

//TASK 2 
function splitString() {
  // splitString separates a string into letters and returns it as an array
  return string.split('');
}

// TASK3
function addBread(person, bread) {
  // addBread adds a favourite bread to the person object and returns the updated object
  person['loaf'] = 'sourdough';

  return;
}

//TASK 4
function countTheChars(array, char) {
  // countTheChars counts the occurrences of the char in the array and returns the count
  const count = 0;

  return count;
  for (let i = 0; i < array; i++) {
    if (array[i] == char) {
    }
    count++;
  }
}

//TASK 5
function addGuestsToParty(peopleArray) {
  // addGuestsToParty looks for anyone in the peopleArray who have RSVP's yes 
  // and adds them to the guests array in the party object. 
  // It then returns the guest array.
  const party = {
    host: 'Paul Copley',
    venue: 'Hatch',
    theme: 'Under the sea',
    guests: [{ name: 'Rose' }, { name: 'Eli' }],
  };

  peopleArray.forEach((person) => {
    if (person.RSVP) {
      party.push({ name: person.name });
    }
  });

  return party;
}

/*
    What would we want people to learn about error-spotting?
    Are there common errors we'd want them to be familiar with?
    - spelling mistakes ✅
    - missing parameter ✅
    - return in wrong place ✅
    - missing return ✅
    - hard coding solutions over using variables (not using params) ✅
    - incorrect key names with objects ✅
    - block scoping issues ✅
    - consts for variables we want to reassign ✅
    - strict equality and loose equality ✅
    - broken for loop (stop condition)✅
    - console logs that should be deleted?
    - returning the wrong data type? ✅
    - incorrect if statements ✅
    - wrong method on wrong data type ✅
    
*/


// ---------- Do not change the code below this line --------------
module.exports = {
  getFirstItem,
  countTheChars,
  splitString,
  addBread,
  addGuestsToParty,
};

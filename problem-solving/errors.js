// Work through these challenges in order, regularly running the tests until they all pass!

function getFirstItem(arr) {
  const firstItem = arr[0];

  return firstitem;
}

function splitString() {
  return string.split("")
}

function addBread(person, bread) {
  
  person['loaf'] = 'sourdough'
  
  return 
}

function countTheChars(array, char) {
  const count = 0;
  
  return count;
  for (let i = 0; i < array; i++) {
    if (array[i] == char) {
    }
    count++;
  }
}

function addGuestsToParty(peopleArray) {
const party = {
  host: 'Paul Copley',
  venue: 'Hatch', 
  theme: 'Under the sea', 
  guests: [{name: 'Rose'}, {name: 'Eli'}]
}

peopleArray.forEach((person) => {
  if (person.RSVP){
    party.push({'name': person.name})
  }
})

return party
}


/*

- Intro to this section

    x 3 

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

module.exports = { getFirstItem, countTheChars, splitString, addBread, addGuestsToParty};

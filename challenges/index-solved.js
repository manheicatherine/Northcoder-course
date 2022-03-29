// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

// MATHS 
function modulo(a, b) {
  return a % b
}

function squareRoot(n) {
  return Math.sqrt(n)
}

function raiseToPower(m, n) {
  return Math.pow(m,n);
}

function formatMoney(amount) {
  let money = amount.toFixed(2);
  return ('£' + money);
}

function calculateCircleArea(r) {
  let area = Math.PI * (r * r);
  let area3DP = area.toFixed(3);
  return parseFloat(area3DP);
}

function calculateFullTurns(degrees) {
  let turns = degrees / 360;
  return parseInt(turns);
}



//STRINGS
function getLength(str) {
  return str.length
}

function putNamesTogether(firstName, lastName) {
  return `${firstName} ${lastName}`
}

function capitaliseString(str) {
  let capitalLetter = str.charAt(0).toUpperCase();
  let restOfString = str.slice(1);
  return capitalLetter + restOfString;
}

function dontShoutSentence(SENTENCE) {
  let firstCharacter = SENTENCE.charAt(0);
  let restOfSentence = SENTENCE.slice(1).toLowerCase();
  return firstCharacter + restOfSentence;
}

function getMiddle(str) {
  let strLength = str.length;
  let halfLength = strLength / 2;

  if (strLength % 2 === 0){

    return str.slice(halfLength - 1, halfLength + 1);

  } else if (strLength % 2 !== 0){

    let wholeHalfLength = Math.ceil(halfLength);
    return str.charAt(wholeHalfLength - 1);

  }}

function getLastWord(words) {
  
  let wordsArr = []
  let lastWord;

  wordsArr = words.split(' ');

  if (wordsArr.length === 0){
    lastWord = words;
  } else {
    lastWord = wordsArr[wordsArr.length - 1];
  }

  return lastWord;
}

function hyphenateWords(words) {
  return words.replaceAll(" ", "-")
}

function convertToCamelCase(words) {
  let arr = words.split(' ');
  let capitalisedArr = [];

  capitalisedArr += arr[0].toLowerCase();

  if (arr.length === 1){
    return capitalisedArr;

  } else{
    for (let i = 1; i < arr.length; i++){
      let upperCase = arr[i].charAt(0).toUpperCase();
      let newWord = upperCase + arr[i].slice(1);
      capitalisedArr += newWord;
    }

    return capitalisedArr;
  }
}

// BOOLEANS/CONDITIONAL LOGIC
function areValuesEqual(left, right) {
  return left === right
}

function areValuesNotEqual(left, right) {
  return left !== right
}

function isFromThe60s(year) {
  if (1960 <= year && year <= 1969) {
    return true
  }
  return false
}

function isEvenLength(string) {
 if (string.length % 2 === 0) return true

 return false
}

function areStringsEqualCaseInsensitive(left, right) {
  return left.toLowerCase() === right.toLowerCase()
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//ARRAYS
function getEvenNumbers(nums) {
  return nums.filter((num) => num % 2 === 0)
}

function getItemsLongerThan(array, length) {
  return array.filter((item) => item.length > length)
}

function getLastItems(array, n) {
  let newArr = [];
  //recursion where it pushes array[array.length - n] and minuses  1 to n 

  for (let i = n; i > 0; i--){
    newArr.push(array[array.length - i]);
  }

 return newArr;
}

function getSandwichFilling(sandwich) {
  sandwich.splice(sandwich.length - 1, 1)
  sandwich.splice(0, 1)

  return sandwich


}

function removeItem(array, n) {
  // return a new array without the item on position 'n', effectively removing it from the array
  return array.filter((num, i) => i !== n)
}

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2)
}

function flattenArrayByOne(arrayOfArrays) {
  return arrayOfArrays.flat()
}

function isItemOmnipresent(arrayOfArrays, item) {
  return arrayOfArrays.every((array) => array.includes(item))
}



// OBJECTS!!!!!!!!1
function isOver40(user) {
  return user.age > 40
}

function getUserAge(user) {
  return 2022 - user.yearOfBirth
}

function getUserPetAge(user) {
  /*  The argument user will be an object. The object is nested; there are objects paired to keys on the user object. It will be in this format:
      {
        name: "Tom",
        age: 26,
        pet: {
          name: "Barney",
          age: 6,
          type: "good boy"
        }
      };
      This function should access the age property in the nested pet object and return the value
  */
 return user.pet.age
}

function createProduct() {
  /*
    This function should return an object with a type property and a price property. The value for type can be any string, and the value for price should be a number.
    */
   const obj = {"type": "vimto",
  "price": 1.50}

  return obj


}

function addPriceToProduct(product, price) {
  /* The argument product will be an object that looks like this:
    { type: 'Tofu slices' }
    Add a price property to this object and set its value to the price passed in as an argument. Then return the object.
    */
   product['price'] = price
  
   return product

}

function getPropertyOfProduct(product, property) {
  /* The argument product will be an object that looks like this:
    { type: 'Easy-peeler satsumas', price: '£1.09', quantity: 8 }
    Given a 'property' as an argument, return the value associated with that 'property'. 
    E.g. if asked for the price 'property' of the above satsumas object, your function would return '£1.09'.
  */
 return product[property]
}

function addPropertyToProduct(product, property, value) {
  /* The argument 'product' will be an object that looks like this:
    { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1 }
    Given a 'property' as an argument, as well as its corresponding value, update the 'product' to include this new information. Then return the updated 'product'.
    E.g. if given the 'property' 'length' and the value '2h 36m' (yes it really is that long) 
    your function should return { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1, length: '2h 36m' }
  */
  product[property] = value

  return product
}

function createNorthcoder(name, yearOfBirth) {
  // return an object with:
  // a name property set to the value of the name parameter
  // an age property set to whatever the age of the northcoder would be in the year 2019
  // a language property set to 'JavaScript'
  let northcoder = {
    name: name,
    age: (2019 - [yearOfBirth]),
    language: 'JavaScript'
  };

  return northcoder;
}

function updateVoterAddress(voter, correctHouseNumber) {
  /* Uh-Oh! We've got some silly voters who've registered their addresses incorrectly. Lets help them fix those typos by changing their houseNumber to the correctHouseNumber. The user object looks like this:
    {
      name: "Alex",
      age: 39,
      address: { 
        houseNumber: 2, 
        street: "Old St", 
        city: "Chester" 
      }
    };
    Note - The function does NOT need to return anything.
  */

    voter.address.houseNumber = correctHouseNumber
}

function createUserString(userObj) {
  // should take as an argument an object with the format from createNorthcoder
  // returns a string with the user's details in the form:
  // 'name: Mitch, age: 27, language: Javascript';
  // Note - this is a good use case of string template literals.

  return `name: ${userObj.name}, age: ${userObj.age}, language: ${userObj.language}`;
}

function getNorthcodersNames(northcoders) {
  // should take an array of objects with the format from createNorthcoder
  // returns an array of the users' names as strings
  return northcoders.map((northcoder) => northcoder.name)
}

function getAlbumProperties(obj) {
  // should take an object with information about an album
  // should return an array containing all of the object's keys
  // E.g. {a: 'foo', b: 'car', c: 'bar'} should return ['a', 'b', 'c']
  return Object.keys(obj)
}

function deleteManyPasswords(users) {
  /*
    This function take an array of user objects and deletes the password key value pair on each user object.
    E.g.
    [
      {name: 'Barry', password: 'ilovetea'},
      {name: 'Sandeep', password: 'ilovecoffee'},
      {name: 'Kavita', password: 'ilovepie'}
    ]
    Returns:
    [
      {name: 'Barry' },
      {name: 'Sandeep'},
      {name: 'Kavita'}
    ]
    */
   users.forEach((user) => delete user.password)

   return users
}

function countTheObjects(arr) {
  /*
    This function takes an array of different data types. It should return a count of the number of objects in the array.
    NB, think carefully about how to test if something is an object! Arrays are technically types of objects in JavaScript, as is the value null. However these should not be counted.
    */
    let objCount = 0;

    for (let i = 0; i < arr.length; i++){
     if ( arr[i] && arr[i].constructor === Object){
       objCount += 1;
     }
    }
    return objCount;
}

module.exports = {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
  areValuesEqual,
  areValuesNotEqual,
  isFromThe60s,
  isEvenLength,
  areStringsEqualCaseInsensitive,
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  getEvenNumbers,
  getItemsLongerThan,
  getLastItems,
  getSandwichFilling,
  removeItem,
  mergeArrays,
  flattenArrayByOne,
  isItemOmnipresent,
  isOver40,
  getUserAge,
  getUserPetAge,
  createProduct,
  addPriceToProduct,
  getPropertyOfProduct,
  addPropertyToProduct,
  createNorthcoder,
  updateVoterAddress,
  createUserString,
  getNorthcodersNames,
  getAlbumProperties,
  deleteManyPasswords,
  countTheObjects
};

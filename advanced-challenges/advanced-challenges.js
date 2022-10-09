function getEvenNumbers(nums) {
  //OK

  /*
    This function takes an array of integers and returns an array containing only even integers
  */
  // let newArr = nums.filter(num => num % 2 == 0);
  // return newArr;
  const newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      newArr.push(nums[i]);
    }
  }
  return newArr;
}

function flipBooleans(bools) {
  //OK

  /*
    This function takes an array of booleans and should return an array of the opposite booleans.
    E.g. [true, true, false] => [false, false, true]
  */
  const newArr = [];
  for (let i = 0; i < bools.length; i++) {
    if (bools[i] == true) {
      newArr.push(!true);
    } else if (bools[i] == false) {
      newArr.push(!false);
    }
  }
  return newArr;
}

function translateKey(student, keyToChange, translation) {
  /*
    Northcoders is expanding to France 🎉🥖. 
    Unfortunately, our team on the ground in Paris doesn't speak the best English and has been providing us with student data partly in French. 
    This function will take an object representing a student's data, a key that needs changing, and its English translation.  
    E.g. 
    const student = {
      prénom: 'Carla',
      surname: 'Bruni',
      job: 'Artist'
    }
    const keyToChange = 'prénom'
    const translation = 'firstName'

    It returns a **new object** with the key successfully translated into English.
    E.g. 
    {
      firstName: 'Carla',
      surname: 'Bruni,
      job: 'Artist'
    }
  */
  //     console.log(student, keyToChange)
  //  { 'prénom': 'Carla', surname: 'Bruni', job: 'Artist' } prénom
  //   { firstName: 'Napoleon', surname: 'Bonaparte', ilsSontMorts: true } ilsSontMorts

  // console.log(student,  translation)
  // { 'prénom': 'Carla', surname: 'Bruni', job: 'Artist' } firstName
  // { firstName: 'Napoleon', surname: 'Bonaparte', ilsSontMorts: true } isDead
  const newStudent = { ...student };
  newStudent[translation] = newStudent[keyToChange];
  delete newStudent[keyToChange];
  return newStudent;
}

function findFirstDentist(people) {
  // OK

  /*
    This function takes an array of people objects and returns the first found dentist object from the array.
  */

  for (let i = 0; i < people.length; i++) {
    if (people[i]["isDentist"] === true) {
      return people[i];
    }
  }
  return null;
}

function tallyPeopleInManchester(people) {
  // OK

  /* This function receives an array of people objects in for format:
    [
      { name: 'Emmeline', lives: { country: 'UK', city: 'Manchester' }, age: 32 }
    ]

    The function should return the number of people who live in the city of Manchester
  */
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    if (people[i]["lives"]["city"] === "Manchester") {
      count++;
    }
  }

  return count;
}

function getPugOwners(dogs) {
  /*
    This function takes an array of dog objects and returns an array of the names of all the pug owners.
    E.g.
    const dogs = [
      0: {name: 'Beatrice', breed: 'Lurcher', owner: 'Tom'},
      1: {name: 'Max', breed: 'Pug', owner: 'Izzi'},
      2: {name: 'Poppy', breed: 'Pug', owner: 'Anat'}
    ]
    will return ['Izzi', 'Anat']
  */

  // How to loop in nested object? for...in, Object.keys(), Object.values(), and Object.entries() methods for only objects in JavaScript.
  // On the other hand, forEach(), map(), or for...of are used for arrays.

  const newDogs = [];

  // for (let i = 0; i < dogs.length; i++) {
  //   if (dogs[i]["breed"] === "Pug") {
  //     newDogs.push(dogs[i]["owner"]);
  //   }
  // }

  // for (let x in dogs) {
  //   if (dogs[x].breed == "Pug") {
  //     newDogs.push(dogs[x].owner);
  //   }
  // }

  for (let i of dogs) {
    if (i.breed === "Pug") {
      newDogs.push(i.owner);
    }
  }

  return newDogs;
}

function pluraliseKeys(obj) {
  /*
    In this function you will be provided with an object. That object is storing information on keys. 
    E.g. {
      name: 'Tom',
      job: ['writing katas', 'marking'],
      favouriteShop: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    };

    In some cases, however, the keys have been very badly named. Good naming convention tells us that the keys containing arrays should be named as plurals. 
    This function should return a **new object** that is a copy of the input but with any keys that contain arrays pluralised (an 's' added to the end.)

    
    E.g. {
      name: 'Tom',
      jobs: ['writing katas', 'marking'],
      favouriteShops: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    }
  */

  //Iterate the values of objects and add 's'
  // Problem is I cannot add "s", even I loop each key and using the length of key to check whether > 1. At last I add "s" of the key.
  const newObj = {};
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      let newKey = i + "s";
      newObj[newKey] = obj[i];
    } else {
      newObj[i] = obj[i];
    }
    // if (obj[i].length > 1) {
    //   const newObj = obj[i].concat("s");
    //   obj.replace(obj[i], newObj);
    // }
  }
  return newObj;
}

function getWordLengths(str) {
  /*
    This function takes a string and returns an array of the lengths of each word in the string.
    E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
  */
  //  Split the word and use the length of array to input in newArr
  if (str.length == 0) return [];

  const newArr = str.split(" ");
  const newArrMapped = newArr.map((item) => {
    return item.length;
  });
  return newArrMapped;
}

function getPalindromes(words) {
  /*
    This function takes an array of words and returns an array containing only the palindromes.
    A palindrome is a word that is spelled the same way backwards.
    E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] =>  ['racecar', 'tacocat']
  */

  //  It doesn't work, I used for loop for the 1st of eachWord and used for loop again to check the palindromes
  // if (eachWord[0] == eachWord[eachWord.length - 1]) {
  // for(let j = 0; j < eachWord.length; j++){
  // if( eachWord[j] == eachWord[eachWord.length - 1 - j]){
  // palindromes.push(eachWord);
  // }

  const palindromes = [];
  for (let i = 0; i < words.length; i++) {
    let isPalindrome = true;
    const eachWord = words[i];

    for (let j = 0; j < eachWord.length; j++) {
      if (eachWord[j] !== eachWord[eachWord.length - 1 - j]) {
        isPalindrome = false;
      }
    }
    if (isPalindrome === true) palindromes.push(eachWord);
  }
  return palindromes;
}

function replaceLettersWithXs(str) {
  //OK
  /* 
    This function will receive a string with a mix of characters. It should return the string with all letters replaced by dashes ('X').
    For example 'I love Greg' should return 'X XXXX XXXX', and 'Hard as 1, 2, 3' should return 'XXXX XX 1, 2, 3'.
  */
  let newString = str.replaceAll(/[A-Za-z]/gi, "X");
  return newString;
}

function validMobileNumber(num) {
  /*
    This function will receive the string of a mobile number. It should return true if the number is a valid UK number and false if not.
    A valid mobile number may begin with '07' followed by 9 more digits. ^07(9 - 11 no.)
    It may also begin with '+447' followed by 9 more digits. (9)
    It may also begin with '00447' followed by 9 more digits.
    Anything else is invalid.
  */
  //  for(let i = 0; i < num.length; i++){
  //   if(num.length == 11 && num[0]== 0 && num[1] == 7){
  //   return true;
  //   } else if() {
  //   } else if() {
  //   }
  const regex = /^(07|\+447|00447)\d{9}$/;
  return regex.test(num);
}

function sumDigitsFromString(str) {
  /*
    This function takes a string with a jumble of letters and numbers. It should add together all the numbers that appear in the string and return the total.
    E.g. 'foo5bar6cat1' => 12
    'foo99cat' => 18
    Tip: For this one, it might be useful to know that the value `NaN` in JavaScript behaves oddly. For example, if you do `typeof NaN` it tells you it's a `"number"`. Odd, eh?
  */
  const characters = str.split("");
  const numbers = characters.filter((word) => /^[0-9]/.test(word));
  const sum = numbers.reduce((previous, current) => previous + parseInt(current), 0);
  return sum;

  // ^0-9
  for (i of str) {
    // cather9ine
    // 'c a t h e r 9 i n e'
    //   console.log(`
    // ${i}
    // parseInt(${i}) = ${parseInt(i)}
    // parseInt(${i}) === NaN ? ${parseInt(i) === NaN}
    // is NaN === NaN ? ${NaN == NaN}
    // `)
    // if (parseInt(i) !== NaN) console.log("CHAR IS NUMBER", i);
  }
}

function getWilliams(arr) {
  //OK

  /*
    This function takes an array of full names and returns an array containing only the people whose last name is Williams.
    E.g. ['Charlotte Jones', 'Rebecca Williams', 'Harry Williams', 'John Williamson', 'William Jones'] => ['Rebecca Williams', 'Harry Williams']
  */
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("Williams") && !arr[i].includes("Williamson")) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function getFactorials(nums) {
  /*
    This function takes an array of positive integers and returns an array of the factorials of these numbers.
    E.g. [4, 3, 2] => [24, 6, 2]

    The factorial of a number is the product of that number and all the integers below it.
    E.g. the factorial of 4 is 4 * 3 * 2 * 1 = 24
  */
  // const newArr = [];
  // for(let i = 0; i < nums.length; i++){
  //   newArr.push(nums[i] * factorialize(nums[i] - 1));
  // }
  // return newArr;
  // for (let i = 0; i < nums.length; i++) {
  //   const eachNum = nums[i];
  //   if (eachNum > 0) {
  //     for (let j = eachNum - 1; j >= 1; j--) {
  //       newArr.push((eachNum = eachNum * j));
  //     }
  //   }
  // }

  function factorialize(number) {
    if (number < 1) return 1;
    return number * factorialize(number - 1);
  }

  const map1 = nums.map((x) => {
    return factorialize(x);
  });

  return map1;
}

function largestNumber(num) {
  /*
    This function takes a number and returns the largest number that can be made with the same digits.
    E.g. if num is 23, the function should return 32.
    E.g. if num is 9, the function should return 9.
    E.g. if num is 581 the function should return 851.
  */
  // const arr = [];
  // if (num.length == 1) {
  //   arr.push(num);
  // } else {
  //   const splitNum = num.split(" ");
  //   const newNum = splitNum.sort(function (a, b) {
  //     return b - a;
  //   });
  //   newNum.join();
  //   arr.push(parseInt(newNum));
  // }
  // return arr;

  const stringArr = String(num).split("");
  const numberArr = stringArr.map((string) => parseInt(string));
  const sortedArray = numberArr.sort(function (a, b) {
    return b - a;
  });
  // [ 5, 4, 3, 2, 1 ].join() === '5,4,3,2,1'
  // [ 5, 4, 3, 2, 1 ].join("") === '54321'
  // [ 5, 4, 3, 2, 1 ].join("-") === '5-4-3-2-1'
  const newStringNum = sortedArray.join("");
  return parseInt(newStringNum);
  // const newNum = parseInt(newStringNum);
  // return newNum;
}

function generateMatrix(n) {
  // OK

  /*
    This function takes a number, n, and returns an n*n nested array populated with the value null.
    E.g. if n is 3, we want:
    [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  */
  let result = [];
  for (var i = 0; i < n; i++) {
    result.push([]);
    for (var j = 0; j < n; j++) {
      result[i].push(null);
    }
  }
  return result;
}

function findWrongWayFruit(orchard) {
  /*
    This array takes an array of fruit in the format:
    ['apple', 'apple', 'apple', 'apple', 'elppa', 'apple']

    ['elppa', 'apple', 'apple', 'apple', 'apple', 'apple']
    ['apple', 'apple', 'apple', 'apple', 'apple', 'elppa']

    The fruit will all be the 'right way round' apart from 1 fruit!
    Your function should return its index position. E.g. in this example, 4.
    NB The fruit will not always be apple but it will always be an orchard of the same kind of fruit.
  */

  let indexOfOrchard;
  if (orchard.length < 3) return 0;
  for (let i = 0; i < orchard.length; i++) {
    if (orchard[0] === orchard[orchard.length - 1] && orchard[0] !== orchard[i]) {
      indexOfOrchard = i;
    } else if (orchard[0] !== orchard[orchard.length - 1]) {
      if (orchard[0] !== orchard[1]) {
        indexOfOrchard = 0;
      } else {
        indexOfOrchard = orchard.length - 1;
      }
    }
  }
  return indexOfOrchard;
}

function pairDNA(dna) {
  /*
    This function takes a string of DNA such as 'GTCA' and returns an array containing correctly matched DNA pairs.
    E.g. 'GTTC' => ['GC', 'TA', 'TA', 'CG']
    If any nonsensical letters are passed as DNA they should be ignored.
    E.g. 'GYTC' => ['GC', 'TA', 'CG']
  */

  // reference object of DNA pairs
  const reference = {
    A: "T",
    C: "G",
    T: "A",
    G: "C",
  };

  const newDnaArr = [];
  for (let i of dna.toUpperCase().split("")) {
    if (/^(A|C|T|G)$/.test(i)) {
      newDnaArr.push(i + reference[i]);
    }
  }

  return newDnaArr;
}

function tallyHashtagsAndMentions(str) {
  /* 
    This function receives a string that will contain a number of mentions and hashtags as on Twitter.

    E.g. "So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"

    The function should return an object describing the number of hashtags and mentions found:
    { hashtags: 2, mentions: 1 }
  */
  let hashtagsCount = 0;
  let mentionsCount = 0;
  const words = str.split(" ");
  // for (let i = 0; i < str.length; i++) {
  // if (str[i].includes(/#/g)) {
  //   hashtagsCount++;
  // } else if (str[i].includes(/@/g)) {
  //   mentionsCount++;
  // }
  // }

  for (let word of words) {
    if (/^#/.test(word)) hashtagsCount++;
    if (/^@/.test(word)) mentionsCount++;
  }
  return { hashtags: hashtagsCount, mentions: mentionsCount };
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getEvenNumbers,
  flipBooleans,
  translateKey,
  findFirstDentist,
  tallyPeopleInManchester,
  getPugOwners,
  pluraliseKeys,
  getWordLengths,
  getPalindromes,
  replaceLettersWithXs,
  validMobileNumber,
  sumDigitsFromString,
  getWilliams,
  getFactorials,
  largestNumber,
  generateMatrix,
  findWrongWayFruit,
  pairDNA,
  tallyHashtagsAndMentions,
};

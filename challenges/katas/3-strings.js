// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function getLength(str) {
  // return the length of the passed string
  return str.length;
}

function putNamesTogether(firstName, lastName) {
  // return the first and last names with a space between them 
  // return `${firstName} ${lastName}`
  return firstName + " " +lastName;
}

function capitaliseString(str) {
  // return the passed string with its first letter capitalised
  //`${str[0].toUpperCase()}${str.slice(1)}`
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function dontShoutSentence(SENTENCE) {
  // return the passed sentence (IN ALL CAPS) in lower case
  // keep the first character capitalised
  // const newSen = SENTENCE.toLowerCase();
  // return newSen[0].toUpperCase() + newSen.slice(1);
  return SENTENCE[0].toUpperCase() + SENTENCE.slice(1).toLowerCase();

}

function getMiddle(str) {
  // return the middle (or middle two) character(s) of the passed string
  if(str.length % 2 !== 0 ){
    // console.log(str[Math.ceil(str.length / 2)])
    return str[Math.floor(str.length / 2)];
  } else if (str.length % 2 === 0){
    return str[Math.round(str.length / 2)] + str[Math.ceil(str.length / 2)];
  }
}

function getLastWord(words) {
  // return the last word of a sentence
  // you can assume words doesn't have a period at the end
  const arrWords =  words.split(" ");
  return arrWords[arrWords.length - 1];
}

function hyphenateWords(words) {
  // return the passed string with the spaces replaced by hyphens ("-")
  // return words.split(" ").join("-");
  return words.replace(/ /g, "-");
}

function convertToCamelCase(words) {
  // convert the passed string of space-separated words to camel case
  // camel case looks like this --> camelCaseLooksLikeThis
  const arrWords =  words.split(" ").map(newWords => {
    return newWords[0].toUpperCase()+ newWords.slice(1).toLowerCase()
  });
  arrWords[0] =   arrWords[0].toLowerCase();
  return arrWords.join("");
}

function passwordValidation(password) {
  /*

  Northcoders takes security very seriously. We have a VERY robust password criteria. 

  Any password must include 'n' and 'c' (upper or lowercase) and must end with '1'.
  
  You need to design this function to check the password it is passed. If it fits all of the above criteria then you should return 'valid' else return 'invalid'.

*/

  // if(password.indexOf(/n/i) !== -1 && password.indexOf(/c/i) !== -1 && password[password.length - 1] === "1"){
  //   return "valid";
  // } else {
  //   return "invalid";
  // }
    const passwordArr = password.toLowerCase()
    const passArr = passwordArr.split('');
    if (passArr.includes("n") && passArr.includes("c") && passArr[passArr.length -1] == 1) {
      return "valid";
    } else {
    return "invalid";
    }
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  passwordValidation,
};

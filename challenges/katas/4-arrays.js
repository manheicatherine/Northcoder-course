// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function getEvenNumbers(nums) {
  //return an array of only the even numbers in the given array
  const newNums = [];
    for(let i = 0; i < nums.length; i++){
      if(nums[i] % 2 === 0){
        newNums.push(nums[i]);
      }
    }
    return newNums;
}

function getItemsLongerThan(array, len) {
  //return an array of only the items longer than the given length
  const newArr = [];
  for(let i = 0 ; i < array.length; i++){
    if(array[i].length > len)
    newArr.push(array[i]);
  }
  return newArr;
}

function getLastItems(array, n) {

  const arrCopy = [...array];
  const newArr = [];
  const reverseArr = arrCopy.reverse();
  const len = n - 1;
  for(let i = 0; i <= len; i++){
    newArr.push(reverseArr[i]);
  }
  return newArr.reverse();
  }
  
  


function getSandwichFilling(sandwich) {
  // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich

    sandwich.shift();
    sandwich.pop();
    return sandwich;

}

function removeItem(array, n) {
  // return a new array without the item on position 'n', effectively removing it from the array
  // const newArr = [];
  const arrCopy = [...array];
  arrCopy.splice(n, 1)
  return arrCopy;
  // newArr.push(array);
  // delete newArr[n];
  // return newArr;
  // const newArray = array.splice(n, 1);
  // return newArray;
  

}

function mergeArrays(arr1, arr2) {
  // return a new array with all the elements of arr1 followed by all the elements of arr2
  // const newArr = [];
  // newArr.push(arr1);
  // newArr.push(arr2);
  // return newArr;
  const newArr = arr1.concat(arr2);
  return newArr;
}

function flattenArrayByOne(arrayOfArrays) {
  /* given a nested array or arrays, return a new array with one less level of nesting. All the elements of all the original nested arrays must be kept in their original order
  for example: [[1],[2],[[3,4]]] => [1,2,[3,4]]
  */

  const newArr = [];
  for(const array of arrayOfArrays){
    // console.log(array);
    newArr.push(...array);
   
  }
  return newArr;
  // arrayOfArrays [ [ 1, 2 ], [], [ 3 ], [ 'hello', true ] ]
  // newArr        [ [ 1, 2 ], [], [ 3 ], [ 'hello', true ] ]
  }
  


  function isItemOmnipresent(arrayOfArrays, item) {
    for(let i = 0; i < arrayOfArrays.length; i++){
      if(!arrayOfArrays[i].includes(item)){
        return false
      }
    }
  
    return true
  }

// ---------- Do not change the code below this line --------------
module.exports = {
  getEvenNumbers,
  getItemsLongerThan,
  getLastItems,
  getSandwichFilling,
  removeItem,
  mergeArrays,
  flattenArrayByOne,
  isItemOmnipresent,
};

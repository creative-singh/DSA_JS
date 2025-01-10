/*
Write a function to find the largest number in an array.
Examples: 
Input: [4, 5, 6, 7, 8, 3, 1]  
Output: 8  

Input: [15, 22, 3, 9, 1]  
Output: 22 
*/

function largestNumber(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

let arr1 = [4, 5, 6, 7, 8, 3, 1];
let arr2 = [15, 22, 3, 9, 1];
console.log(largestNumber(arr1)); // 8
console.log(largestNumber(arr2)); // 22

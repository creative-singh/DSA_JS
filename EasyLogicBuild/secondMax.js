/*
⃣Write a function to find the second largest number in an array.
Examples: 
Input: [4, 5, 6, 7, 8, 3, 1]  
Output: 7  

Input: [15, 22, 3, 9, 1]  
Output: 15
*/

function secondMax(array) {
  let max = array[0];
  let sMax = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      sMax = max;
      max = array[i];
    }
  }
  return sMax;
}

let arr1 = [4, 5, 6, 7, 8, 3, 1];
let arr2 = [15, 22, 3, 9, 1];
console.log(secondMax(arr1)); // 7
console.log(secondMax(arr2)); // 15

// Question: Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (arr, i = 0) {
    if(i === arr.length) return arr
    arr[i] = `${arr[i].slice(0,1).toUpperCase()}${arr[i].slice(1)}`
    return capitalizeFirst(arr, i + 1)
}

console.log(capitalizeFirst(['car','taco','banana'])) 
// ['Car','Taco','Banana']

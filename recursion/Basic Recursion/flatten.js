// Question: Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.


function flatten(arr, res = []) {
    for(let i of arr) {
        if(Array.isArray(i)) {
            flatten(i, res)
        } else {
            res.push(i)
        }
    }
    return res
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]

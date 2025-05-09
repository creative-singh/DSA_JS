function linearSearch(arr, target) {
  for (let i in arr) {
    if (arr[i] === target) return i
  }
  return -1
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10))    // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6))     // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20))   // -1

// Time Complexity: O(n) - Linear Time Complexity
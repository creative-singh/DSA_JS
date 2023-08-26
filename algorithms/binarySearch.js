function binarySearch(arr, target) {
  let leftIndex = 0
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.ceil((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) return middleIndex;
    if (target > arr[middleIndex]) {
      leftIndex = middleIndex + 1
    } else {
      rightIndex = middleIndex - 1
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));  // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 4));  // 2
console.log(binarySearch([-5, 2, 4, 6, 10], 20));  // -1
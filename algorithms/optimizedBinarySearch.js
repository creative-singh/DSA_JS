// Optimize mid: so that if start and end is big, int never go out of bound

const binarySearch = (arr, target) => {
  let st = 0;
  let end = arr.length - 1
  while (st <= end) {
    let mid = Math.floor(st + ((end - st) / 2))
    if (arr[mid] === target) return mid
    if (arr[mid] < target) {
      st = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}


console.log(binarySearch([-5, 2, 4, 6, 10], 10));  // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 4));  // 2
console.log(binarySearch([-5, 2, 4, 6, 10], 20));  // -1

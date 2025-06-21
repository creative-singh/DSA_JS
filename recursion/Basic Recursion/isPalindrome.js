function isPalindrome(str, l = 0, r = str.length-1) {
    if(l >= r) return true
    if(str[l] !== str[r]) return false
    return isPalindrome(str, l + 1, r - 1)
}

console.log(isPalindrome("radar"));    // true
console.log(isPalindrome("hello"));    // false
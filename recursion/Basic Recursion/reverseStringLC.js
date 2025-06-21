// Leetcode reverse a string
// In-place algo with recurssion

var reverseString = function(s, left = 0, right = s.length - 1) {
    if(left > right) return 
    [s[left], s[right]] = [s[right], s[left]]
    return reverseString(s, left + 1, right - 1)
};

str = ['h', 'e', 'l', 'l', 'o']
reverseString(str)
console.log(str)
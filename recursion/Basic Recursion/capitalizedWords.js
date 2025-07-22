// Question: Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizedWords (words, i = 0) {
    if(i === words.length) return words
    words[i] = words[i].toUpperCase()
    return capitalizedWords(words, i + 1)
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

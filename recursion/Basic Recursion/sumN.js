function sumN(n) {
    if(n === 1) return 1

    return sumN(n-1) + n
}

console.log(sumN(5)) // 15
console.log(sumN(10)) // 55

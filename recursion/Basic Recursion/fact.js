function fact(n) {
    if(n == 1) return 1

    return fact(n-1) * n
}

console.log(fact(5))    // 120
console.log(fact(1))    // 1
console.log(fact(7))    // 5040
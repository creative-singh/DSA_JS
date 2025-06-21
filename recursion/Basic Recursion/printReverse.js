function printReverse(num) {
    console.log(num)
    if(num == 1) return
    printReverse(num - 1)
}

printReverse(10);
console.log("-");
printReverse(5);
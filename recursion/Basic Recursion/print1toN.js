function print1toN(num) {
    if(num == 0) return 
    print1toN(num - 1)
    console.log(num)
}

print1toN(10);
console.log("-");
print1toN(5);
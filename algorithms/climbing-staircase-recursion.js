function climbingStaircase(num){
    if(num == 0) return 1
    if(num == 1) return 1
    
    return climbingStaircase(num-1) + climbingStaircase(num-2)
}

console.log(climbingStaircase(1))       // 1
console.log(climbingStaircase(2))       // 2
console.log(climbingStaircase(3))       // 3
console.log(climbingStaircase(4))       // 5
console.log(climbingStaircase(5))       // 8

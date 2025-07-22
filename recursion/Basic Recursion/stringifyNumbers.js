// Question: Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
// The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged.

function stringifyNumbers(obj, newObj = {}) {
    for(let key in obj) {
        let val = obj[key]
        if(typeof val === "number") {
            newObj[key] = String(val)
        } else if(typeof val === 'object') {
            let newObj2 = Array.isArray(val) ? [] : {}
            newObj[key] = stringifyNumbers(val, newObj2)
        }else {
            console.log(val)
            newObj[key] = val
        }
    }    
    return newObj
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

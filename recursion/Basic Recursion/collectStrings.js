// Question: Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj, arr = []) {
    for(let key in obj) {
        if(typeof(obj[key]) === 'string') {
            arr.push(obj[key])
        } else {
            collectStrings(obj[key], arr)
        }
    }
    return arr
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])



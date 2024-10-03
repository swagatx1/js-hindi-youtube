// In tis we will learn how to iterate over objects{key:value}

const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple",
}

// we know that for of loop doesnty work with Object
//  sowe will use for in loop in

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}



// Array
// with for in work with Arrays

const arr = ['js', 'cpp','ruby','py','swift']

for (const key in arr) {
    console.log(`index-${key},  value-${arr[key]}`);    
}
for (const key of arr) {
    console.log(key);
    
}



// Maps
//  will for in loop work on maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('UFR', "France")

for (const key in map) {
    // console.log(key);      
}

// Maps cant be iterated on using for in loop


// CIONCULSION
// - if we have to iterate over Objects{} we use [for in loop]
// - if we have to iterate over Maps() we use [for of loop]
// - if we have to iterate over Arrays we can use both [for of loop] or [for in loop]

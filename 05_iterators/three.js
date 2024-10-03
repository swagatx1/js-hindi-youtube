//  for of loop

// ["","",""]
// [{},{},{}]

const arr =[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);

}


const greeting = "Hello World"
for(const greet of greeting){
    if (greet == " ") continue // This is used to skip spacebar
    // console.log(`Each char in greeting is ${greet}`);
}


// Maps
// Map Properties  
// 1. No Duplicates  2. Maintains Order  3. Key-Value Pair Structure: 

// Advantages of Maps:
// 1. Fast Lookup 2. 

// Common Operations on Maps:
// - Adding an element
// - Removing an element
// - Accessing a value
// - Iterating over elements

// In this section, we will learn how to:
// - Iterate over a Map using key-value pairs.
// - Use various iteration techniques such as for-each loops or iterators, depending on the language.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('UFR', "France")

// console.log(map);
 
for(const key of map){
    // console.log(key);
}

for(const [key, value] of map){
    // console.log(`${key} :- ${value}`);
}



// Objects

const myObj = {
    "game1":"NFS",
    "game2":"Spiderman"
}
for (const key of myObj) {
    console.log(key); 
}
//  Basically for of loop doesnt work with Objects !!
















// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const string = "swagat" //String
const num = 123 //Number
const bool = true //Boolean
const outsideTemp = null //null, type of will show it as object 
let usermiddlename; // undefined
const id = Symbol("123") // Symbol
const anotherId = Symbol("123") // we will learn use of Symbols in react mainly
console.log(id===anotherId); // A property of Symbol no 2 Symbols can be same i.e. will show false
const bigNumber = 3456789876543212345678n //BigInt



// Referance (Non Premitive)

// Arrays, Objects, Functions

const heros = ["shakitman", "doga", "nagraj"] // Arrays, typeof will show object

let myobj = { name: "swagat", age: 22, marride: false, ID: 4534n } // Objects, type shows object
// objects can have anything inside them primitives, as well as Arrays, Functions and objects too

//Functions can be declared in multiple ways here we will see variable method of devlaring fun
const myFunction = function(){
    console.log("hello world");
} // typeof will show function 


console.log(typeof(bigNumber));







// There are 2 main ways to declear a object those are  ->  Literal and Contructor(singleton)

// singleton
// Object.create

// object literals
const mysym = Symbol("key1")
const JsUser = {
    name : "swagat",
    "full name" : "swagat rout",
    [mysym] : "myKey1",
    age : 18,
    locatin :"pune", 
    email :"swagat@google.com",
    liLoggedIn : false,
    lastLoginDays : ["Monday", "Satarday"]
}

// To Edit The Object

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mysym]);

JsUser.email = "swagatrout@yahoo.com"
console.log(JsUser.email);

Object.freeze(JsUser.email) // I can freeze any object making it un-editable

JsUser.email = "suraj@yahoo.com"
// console.log(JsUser.email);



// TO Add in the Object
JsUser.loginID = "dz23f44"
// console.log(JsUser.loginID); // added a key:value pair

// TO Add a function in the Object
JsUser.greeting = function(){
    console.log("hello JS user!")
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


















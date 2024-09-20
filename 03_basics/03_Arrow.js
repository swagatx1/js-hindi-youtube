const user = {
    name : "swagat",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`);       
        console.log(this);
    }

}

// user.welcomeMessage()
// user.name = "lamp"
// user.welcomeMessage()

// console.log(this); 
// when using this same line in Chrome, we get `window` as the output because in browsers, 
// `this` at the global scope refers to the `window` object. However, in Node.js, `this` at 
// the top level refers to an empty object `{}`, because Node uses a module system. 
// Some other JavaScript runtimes like Deno or Bun might handle this differently depending 
// on their implementation, but in Node.js, each file is treated as a module and `this` is scoped to that module.
//
// In a Windows environment, when you are using a browser like Chrome, `this` at the top level 
// will point to the global `window` object. Similarly, if you are running JavaScript inside an HTML file in Windows, 
// you would still interact with the `window` global object.


function chai (){
    let username = "swagat"
    console.log("username : ",this.username); // undefined, becuase this doesnt work inside traditional function
    console.log(this); // but lots of other info will show up when used this but no info of username ect
    
}

// chai()

const chai1 = () => {  // This is arrow function works same as 
    let username = "swagat"
    console.log("username : ",this.username); // undefined, becuase this doesnt work in function
    console.log(this); // empty {} when used => function no context inside this
    
}

// chai1()


// ARROW FUNCTION

// Basic (_Explicite Retrun) 
// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// NO Return (Implicite Return)
// const addTwo = (num1, num2) => num1 + num2 
// OR
// const addTwo = (num1, num2) => (num1+num2)
// OR
// const addTwo = (num1, num2) => ({ Addition : (num1+num2) })

console.log(addTwo(3, 2));

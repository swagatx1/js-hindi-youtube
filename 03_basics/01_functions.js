// #1
function saymyName (){
    console.log("S");
    console.log("W");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("T");
}

// saymyName()

// #2
// function addTwoNumbers( num1 , num2 ){
//     console.log( num1 + num2 );
// }
function addTwoNumbers(num1 , num2){
    // let result = num1 + num2
    // return result   
    return num1+num2
}

const result = addTwoNumbers(3, 5)
// console.log("Result : ", result);


// #3 
// function loginUserMessage(username){
//     return `${username} just logged in`
// }
function loginUserMessage(username = "Default_name"){
    if(!username){
        console.log("Please enter a valid username argumnet...");
        return
    }
    return `${username} just logged in`
}

// console.log( loginUserMessage("swagat"));
// console.log(loginUserMessage());

function calculateCartPrice (...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));


const user = {
    username : "hiteh",
    prices: 199
}

function  handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price} `);
}

// handleObject(user)
handleObject(username ={
    username : "sam",
    price : 399
})

myNewArray = [200,400,600]
function returnSecondValue(getArray){
    return getArray[1]
    
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600]));

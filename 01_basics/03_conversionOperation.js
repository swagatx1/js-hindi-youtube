score = "33"

// const {score} = req.body
// console.log(typeof score);
// console.log(typeof(score)); //same as above

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)


//****************************OPERATIONS*************************************** */


let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " swagat"
// console.log(str1+str2);

// console.log("1"+"2"); //12
// console.log("1"+2); //12
// console.log(1+"2"); //12
// console.log(1+2); //3
console.log("1"+2+3); //123
console.log(1+"2"+3); //123
console.log(1+2+"3"); // 33  so 1+2 happen so 3 then +'3' therfore 33


// console.log(true); // true
// console.log(+true); // 1
// console.log(true+); // ERRROR
// console.log(""); // 
// console.log(+""); // 0
// let x = 3;
// const y = x++;
// console.log(`x:${x}, y:${y}`) // Expected output x:4,y:3
// let a = 3;
// const b = ++a;
// console.log(`a:${a}, b:${b}`) // Expected output x:4,y:4
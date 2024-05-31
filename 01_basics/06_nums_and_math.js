const score = 400 // this is a number

const balance = new Number(100) // this is also a number
console.log(balance); //[Number: 100]

console.log(balance.toString().length); // converts number->String->lengthOfString
console.log(balance.toFixed(2)); // 100.00 formats the num using fixed-point notation or add Decimals

const otherNumber = 23.8966
// toPrecision fun formats a number to a specified number of significant digits, returning a string.
console.log(otherNumber.toPrecision(3)); //  23.8966 gets converted to 23.9
console.log(otherNumber.toPrecision(2)); //  23.8966 gets converted to 24
// When you specify 1 as the precision, it means you want the number to be represented with just one significant digit
console.log(otherNumber.toPrecision(1)); //  23.8966 gets converted to 2e+1 this is a single digit


const hundreads = 10000000
console.log(hundreads.toLocaleString());

// +++++++++++++++++++++ Numbers dot static properties +++++++++++++++++++++++++
// These properties are useful for various numerical computations and checks in JavaScript, allowing you to handle edge cases 
// and understand the limits of numeric values in the language.

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308, Largest positive numeric value representable in JavaScript.
console.log(Number.MIN_VALUE); // 5e-324, Smallest positive numeric value representable in JavaScript (closest to zero).
console.log(Number.POSITIVE_INFINITY); // Infinity, Represents positive infinity.
console.log(Number.NEGATIVE_INFINITY); // -Infinity, Represents negative infinity.
console.log(Number.Nan , isNaN(Number.NaN)); // undefined true, Represents the special "Not-a-Number" value.
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991, Represents the maximum safe integer in JavaScript.
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991, Represents the minimum safe integer in JavaScript.
console.log(Number.EPSILON); // 2.220446049250313e-16, Represents the smallest interval between two representable numbers.

// +++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-3)); // the Math.abs converts any value to the absolute value i.e. any (-) value becomes (+) and any (+) val remains (+)
console.log(Math.round(4.3)); // rounds of 4.3 -> 4
console.log(Math.ceil(4.2)); // Math.ceil() rounds a number up to the next largest integer. Since 4.2 is above 4, it rounds up to 5.
console.log(Math.floor(4.9)); // Math.floor() rounds a number down to the nearest integer. No matter the decimal part, 4.9 is rounded down to 4.
console.log(Math.min(4, 3, 2, 1, 0.5)); // 0.5, To find the min value in a array
console.log(Math.max(4, 3, 2, 1, 0.5)); // 4, To find the max value in a array
console.log(Math.random()); // Returns a value between 0 and 1 any decimal value too
console.log(Math.random()*10); // return any value from 0 and 9
console.log((Math.random()*10) + 1); // return any value from 1 and 10


const min = 10
const max = 20
// I wnat val in b/w min and max
// FORMAL ->   (Math.random() * (max - min + 1)) + min   this will give val between min and max but in decimal just use Math.floor to get a single val
process.stdout.write("value b/w 10 and 20 : "); // process.stdout.write does not append a newline at the end, allowing the next console.log to continue on the same line.
console.log(Math.floor( (Math.random()*(max-min+1))+min )); // gives val b/w min and max






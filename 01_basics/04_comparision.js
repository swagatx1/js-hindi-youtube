//  #1
// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 <= 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

//  #2
// console.log("2" > 1); // true
// console.log("2" > 3); // false JS does the tyoe conversion for you so "2"string -> 2 num
// console.log("02" > 1); // true

//  #3
// avoid these type of comparisons
// console.log(null >  0); // false     NULL->0
// console.log(null <  0); // false     NULL->0
// console.log(null == 0); // false     NULL->nan
// console.log(null >= 0); // true      NULL->0
// console.log(null <= 0); // true      NULL->0
//  COMPARISION CONVERTS NULL TO A NUMBER, TREATNG IT AS 0.
//  THATS WHY 'null >= 0' IS TRUE AND NULL>0 IS FALSE 
//  BUT IT ALSO CANT TREAT IT A ORIGINAL VALUE 0 SO NULL IS CONVERTED INTO NAN IN 'null == 0' WHICH IS FALSE

//  #4
// avoid these type of comparisons too
// console.log(undefined >  0); // false
// console.log(undefined <  0); // false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined <= 0); // false
// UNDEFINED DOESNT GET CONVERTED TO ANYTHING IT REMANINS UNDEFINED 

//  #5
// === STRICT CHECK 
// This not only CHECK VALUE but also there DATATYPES
console.log("2" == 2); // true NO STRICT CHECK
console.log("2" === 2); // false WITH STRICT CHECK


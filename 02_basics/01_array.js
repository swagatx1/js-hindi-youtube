//  Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ['shakiman','nagraj']
const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1]);

// Array methods

myArr.push(6) // inser at last
// console.log("_PUSH_6_",myArr);
myArr.pop(6) // delete from last
// console.log('_POP_',myArr);
myArr.unshift(9) // insert at start 
// console.log(myArr);
myArr.shift() // delete from start
// console.log(myArr);

// console.log(myArr.includes(9)); // does my array have/Includes 9 in it true/flase  ?/here false
// console.log(myArr.indexOf(9)); // find me index of (here '9') which doen't exist so -1
 

newArr = myArr.join()  // The join() method concatenates all elements of the array into a string
// console.log(myArr); // typeof -> object because arrays are technically a type of object in JavaScript
// console.log(typeof newArr); // typeof -> string


// Topic  -  slice and splice
console.log('A',myArr );

const myn1 = myArr.slice(1,3)
console.log("slice : ",myn1);

console.log('B', myArr);

const myn2 = myArr.splice(1,3)
console.log('C', myArr);
console.log("splice : ",myn2);

const userEmail = []

if(userEmail){
    console.log("Got user emeil");
    
}else console.log("Don't have user email");

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0", 'flase', " ", [], {}, function(){}

// if (userEmail.length === 0 ){
//     console.log("Array is empty");
// }



const emptyObj = {} 

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty"); 
}


//  Nullish colescing operator(??): null, nudefined

// const val = 5 ?? 10  
// const val = null ?? 10
// const val = undefined ?? 10
// const val = null ?? 5 ?? 10
const val = null ?? null ?? 10
console.log(val);

// as shown above (??) this takes 2 values and if the first value if either null or undefined then the second havle is returned insted
// sometimes when connecting to DataBase they might return null or undefined in those situations this operator is used.



// Terniary Operator

// Syntax->    condition ? true : false

const icePrice = 100
icePrice >= 80 ? console.log("more than 80") : console.log("less than 80");





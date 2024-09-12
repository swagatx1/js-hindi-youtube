// Dates

let myDate = new Date()
console.log("My Date variable type :",typeof(myDate));
console.log("MyDate : ",myDate);
console.log("MyDate toString : ",myDate.toString());
console.log("MyDate toDateString : ",myDate.toDateString());
console.log("MyDate toLocalString : ",myDate.toLocaleString());
console.log("MDate toISOString : ",myDate.toISOString());

console.log();

let myCreatedDate = new Date(2023, 0, 23) // Here 2023 year;    0 is JAN, YES MONTHS START FRO 0-11;    23 is DATE
console.log("My NEW Date variable type :",typeof(myCreatedDate));
console.log("My NEW Date : ",myCreatedDate);
console.log("My NEW Date toString : ",myCreatedDate.toString());
console.log("My NEW Date toDateString : ",myCreatedDate.toDateString());
console.log("My NEW Date toLocalString : ",myCreatedDate.toLocaleString());
console.log("My NEW Date toISOString : ",myCreatedDate.toISOString());

console.log();

const myNewNewDate = new Date(2023, 0, 23, 5, 3) // Here 2023 year;    0 is JAN, YES MONTHS START FRO 0-11;    23 is DATE,    5 is HOURS,    3 is MIN
console.log("My NEW NEW Date variable type :",typeof(myNewNewDate));
console.log("My NEW NEW Date : ",myNewNewDate);
console.log("My NEW NEW Date toString : ",myNewNewDate.toString());
console.log("My NEW NEW Date toDateString : ",myNewNewDate.toDateString());
console.log("My NEW NEW Date toLocalString : ",myNewNewDate.toLocaleString());
console.log("My NEW NEW Date toISOString : ",myNewNewDate.toISOString());

console.log();

const myNewCreatedDate = new Date("2023-01-14")
console.log("My NEW CREATED DATE : ", myNewCreatedDate);
console.log("My NEW CREATED DATE toString : ",myNewNewDate.toString());
console.log("My NEW CREATED DATE toDateString : ",myNewNewDate.toDateString());
console.log("My NEW CREATED DATE toLocalString : ",myNewNewDate.toLocaleString());
console.log("My NEW CREATED DATE toISOString : ",myNewNewDate.toISOString());

console.log();

let myTimeStamp = Date.now()
console.log("This the amount of tine in milisecond past from Unix time standard on 1st Jan 1970 : ",myTimeStamp);

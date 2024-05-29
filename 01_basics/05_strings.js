
name = "swagat "
sirname = "rout "
percentage = 50
console.log(name + sirname + "is " + percentage +"% more awsome");

console.log(`${name}${sirname}is ${percentage}% more awsome`);

// Other way to declar String's is by declaring its object
const gameName = new String("Hitesh-hc-com")
console.log(gameName); //[String: 'Hitesh']
console.log("Character at index '0' : ", gameName[0]); // H
console.log("Character at index '1' : ", gameName[1]); // i
console.log("length : ", gameName.length); // 6
console.log("proto : ", gameName.__proto__); // 6
console.log("toUpperCase : ", gameName.toUpperCase());
console.log("character at index '2' : ", gameName.charAt(2));
console.log("Index of litter 't' : ", gameName.indexOf("t"));

const newString = gameName.substring(0,4)
console.log("substring(0,4) : ", newString);

const anotherString = gameName.slice(-12,4)
console.log("Slice(-12,4) : ", anotherString);

const newnewString = "   swagat   "
console.log("witout trim : ", newnewString);
console.log("with trim : ",newnewString.trim());

// Lets say i want to replace thr "%20" in urls with "-"
const url = "https://swagat.com/swagat%20rout"
console.log("Original url : ", url);
console.log( "Replaced '%20' with '-' : ",url.replace('%20','-') );
// Does urls have word ".com" how to find ?
console.log("Does urls have word '.com' :", url.includes('.com')? "YES!":"NO!" );


// lets say I want to devide a string into array based on the no of '-' in it
console.log("gameName got split based on '-' : ",gameName.split('-'));

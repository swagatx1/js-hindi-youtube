// in database we recieve data in the form of [{},{},{}] so objects inside array 
// so first we need to know how to iterate over array
// We already know there are multiple ways --> for loop/for of/for in/ect..

// Now we will learn forEach loop 
const coding = ['js', 'cpp','ruby','py','swift']

// #1
function printFun(value) {console.log(value);} // this fun is used to print incomming argu

// coding.forEach(  printFun );  // forEach needs a fun to send values into to be printed


// #2
// coding.forEach( function (val){
//     console.log(val);
// } )   
// Here we wrote function inside the forEach


// #3
// coding.forEach( (item)=> {console.log(item);} ) 
// Here we used arrow function inside forEach


// #4
// WE can also print other things with forEach
// coding.forEach( (item, index, arr)=> {console.log(item, index, arr);}  )



// lets try retrewing data from database with [{},{},{}] this structure
const myCoding = [
    {
        langname: 'javascript',
        langfile: 'js'
    },
    {
        langname: 'python',
        langfile: 'py'
    },
    {
        langname: 'java',
        langfile: 'java'
    }
]

myCoding.forEach( (file)=> {
    console.log(file.langname, "-", file.langfile);
} )








// #1 .map
const myNumbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNumbers.map( (num) => num+10)
newNums = myNumbers.map( (num)=> num<4) // This isnt .filter this wont return [1,2,3]
// Chaning
newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
                
console.log(newNums);




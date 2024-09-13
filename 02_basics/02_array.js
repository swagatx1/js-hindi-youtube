

const marvel_heroes = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman','flash','batman']

// marvel_heroes.push(dc_heros)
// console.log(marvel_heroes); // [ 'thor', 'ironman', 'spiderman', ['superman','flash','batman'] ] Array inside Array

const allHeroes = marvel_heroes.concat(dc_heros)
console.log(allHeroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] Two Array get mixed


// Another method to mix two or more arrays is using spread operator(...arr_name) 

const all_new_heros = [...marvel_heroes, ...dc_heros]
console.log(all_new_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const unUsable_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(unUsable_Array); // [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const Usable_Array = unUsable_Array.flat(3)
console.log(Usable_Array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray('Swagat')); // false
console.log(Array.from('Swagat')); // [ 'S', 'w', 'a', 'g', 'a', 't' ]
console.log(Array.from({name:"swagat rout"})); // Intresting .from is unclear whether to convert the key or the value to an array.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]

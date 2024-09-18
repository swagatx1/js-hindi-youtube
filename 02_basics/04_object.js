// const tinderuse = new Object()  // this is a singleton object
const tinderuse = {} // while this is a non singleton object

tinderuse.id = "123abc"
tinderuse.name =  "Sammy"
tinderuse.loggedIn = false

// console.log(tinderuse);

const regularuser = {
    email : "some@gmail.com",
    fullnema : {
        userfullname : {
            firstname : "swagat",
            lastname : "rout"
        }
    }
}

// console.log(regularuser.fullnema);
// console.log(regularuser.fullnema.userfullname);
// console.log(regularuser.fullnema.userfullname.firstname);


// How to combine two objects
const obj1= {1:'a', 2:'b'}
const obj2= {3:'a', 4:'b'}

const obj3 = Object.assign({}, obj1, obj2) // using Object.assign()
// console.log(obj3);
// OR
const obj4 = {...obj1, ...obj2} //using spread operator(...)
// console.log(obj4);
         

//Whem we recieve data from DATABASE we recieve it in Arrays[ {object}{object} ]
const Users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "g@gmail.com"
    },
]
// console.log(Users[0].id);

// console.log(tinderuse);
// console.log(Object.keys(tinderuse));
// console.log(Object.values(tinderuse));
// console.log(Object.entries(tinderuse));

// console.log(tinderuse.hasOwnProperty('name'));

// Object de-structure and JSON API

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
course.courseInstructor // logging this multiple times is tideous
// so we can write 
const {courseInstructor : inst} = course // this is destructuring
console.log( inst );
// whenever you see {something} this is destructuring


//We will learn about API's later but nowadays APIS are recieved in JSON, a text-based format for data exchange.
// what is JSON? - its a object
// {
//     "name": "swagat",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }
// OR
// [
//     {},
//     {},
// ]
// we can access these JSON files by sing fetch command and giving ita url were it can get acces to JSON text
// thats how we recieve values using API's. Next we can just convert it to object andperform operations.
console.log("end");

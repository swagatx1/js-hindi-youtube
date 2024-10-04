
const myNums =[1, 2, 3, 4]
let myTotal =  myNums.reduce( 
    (acc, curr) => {
    // console.log(`acc:${acc}, curr: ${curr}`);
    return acc + curr
    }, 0)

myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);


// #2
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce( (acc, object) => acc+object.price, 0)
console.log(total);


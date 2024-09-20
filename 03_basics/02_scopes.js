let a = 300
const b = 20
var c = 30
if(true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const webite = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

one()

if(true){
    const username = "swagat"
    if(username == "swagat"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(webite);
    
}
// console.log(username);


// +++++++++++++++++ intresting +++++++++++++++++++++

addone(5)
function addone (num){
    return num+1
}


// addTwo(5) // this will show an error 
const addTwo = function(num){
    return num + 2
}

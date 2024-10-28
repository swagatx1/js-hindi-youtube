
const randomColor  = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]           
    };
    return color;
};


console.log(randomColor());
let steBackgroundColor 
const startChangingColor = function(){
    
    if(steBackgroundColor == null){
        steBackgroundColor = setInterval(colorchange,1000)
    }

    function colorchange(){
        document.body.style.backgroundColor = randomColor()
    }

}
const stopChangingColor = function(){
    clearInterval(steBackgroundColor)
    steBackgroundColor=null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)



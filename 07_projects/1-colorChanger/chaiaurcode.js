const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
// console.log(buttons);
// console.log(body);

buttons.forEach((button)=> {
    console.log(button);
    button.addEventListener('click', (e)=>{
        // console.log(e);
        console.log(e.target);
        body.style.backgroundColor=e.target.id
    })    
})


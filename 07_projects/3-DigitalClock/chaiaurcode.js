const clock =document.getElementById('clock')
let FIRSTTIME = new Date()
clock.innerText = FIRSTTIME.toLocaleTimeString()

setInterval(()=>{
    let date = new Date()
    console.log(date.toLocaleTimeString());
    
    clock.innerText = date.toLocaleTimeString()
},1000)
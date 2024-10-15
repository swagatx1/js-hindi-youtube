let randomNumber = parseInt(Math.random()*100+1)
console.log(randomNumber);


const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        const  guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}



function validateGuess(guess){
    //
    if(isNaN(guess)){
        alert('Please enter a valid Number')
    }else if(guess>100 || guess <1){
        alert('The number can only be between 1-100')
    }else{
        prevGuess.push(guess)
        if(numGuess == 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
        
    }
}

function checkGuess(guess){
    if(guess == randomNumber){
        displayMessage('You guessed it right')
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is TOO low`)
    }else{
        displayMessage(`Number is TOO high`)
    }
}

function displayGuess (message){
    userInput.value = ''
    if(numGuess>1) guessSlot.innerHTML += `, ${message} ` 
    else guessSlot.innerHTML += `${message} `
    numGuess++
    remaning.innerHTML = `${11-numGuess}`
}

function displayMessage(message){  
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start a new game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()

}

function newGame(){
    const newGameButton = document.querySelector('#newGame')    
    newGameButton.addEventListener('click', (e)=> {
        randomNumber = parseInt(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML=''
        lowOrHi.innerHTML = ''
        remaning.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}


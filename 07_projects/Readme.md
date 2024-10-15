# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
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



```

## project 2 solution

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){

    e.preventDefault()

    const height = form.querySelector('#height').value
    const weight = form.querySelector('#weight').value
    const result = form.querySelector('#results')

    if(height<=0 || isNaN(height) ){
        result.textContent = (`please give valid Height not -> ${height}`)
    }else if(weight<=0 || isNaN(weight) ){
        result.textContent = (`please give valid Weight not -> ${weight}`)
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let bmiCatagory
        if(bmi<18.6) bmiCatagory='Under Weight'
        if(bmi>18.6 && bmi<24.9) bmiCatagory='Normal Range'
        if(bmi>24.9) bmiCatagory='Overweight '
        result.innerHTML = (`Your BMI is '${bmi}'<br> Your are ${bmiCatagory}`)
    }
})

```

## project 3 solution code

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## #1 MY project 4 solution


```javascript
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

const guessField = document.querySelector('#guessField');
const form = document.querySelector("form");
const lowOrHi = document.querySelector('.lowOrHi');
const GuessesRemaining = document.querySelector('.lastResult');
const submitButton = document.querySelector('.subt');
const guessesDisplay = document.querySelector('.guesses');

let chances = 10;
let previousGuesses = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const guess = Number(guessField.value);
    console.log(guess);
    
    if (guess === randomNum) {
        lowOrHi.textContent = 'You Got the Correct Number!!!';
        lowOrHi.style.color='green';
        lowOrHi.style.fontSize='30px'
        reset();
    } else {
        chances -= 1;
        GuessesRemaining.textContent = `${chances}`;
        previousGuesses.push(guess);
        guessesDisplay.textContent = previousGuesses.join(', ');
        
        if (guess < randomNum) {
            lowOrHi.textContent = 'Your guess is too low!';
        } else if (guess > randomNum) {
            lowOrHi.textContent = 'Your guess is too high!';
        }

        if (chances <= 0) {
            lowOrHi.innerHTML = `<p>Game over! The correct number was ${randomNum}. <br>THIS PAGE WILL RESET IN 3 SEC</p>`;
            reset();
        }
    }
    
    guessField.value = '';
});

function reset() {
    // Your reset logic goes here
    
    // Delay the reload by 3 seconds (3000 milliseconds)
    setTimeout(function() {
        location.reload(); // Reloads the page
    }, 3000);
}


```
## #2 Hitesh sir's project 4 solution


```javascript
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




```

# Project 5 solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6 Solution

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```
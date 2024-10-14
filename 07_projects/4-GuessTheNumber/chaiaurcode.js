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

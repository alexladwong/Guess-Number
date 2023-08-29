'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Guess 😇 ';
document.querySelector('.number').textContent = '🏴‍☠️';
document.querySelector('.score').textContent = '60 ';
document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value);
*/


let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;


const displayMessage = function(message){
    document.querySelector('.message').textContent = message;

}
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    if (!guess) {
        displayMessage("🚫 No guess found.");
        
    } else if (guess === secretNumber) {
        displayMessage('🎉🎉Correct Guess😇⭐️ ');
        document.querySelector('.number').textContent = "It's " + secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


        
        // When the guess is wrong.
    }else if(guess !== secretNumber) {
        if (score > 1) {
        
            document.querySelector('.message').textContent = guess > // Can be shortened 
             secretNumber ? "📈 It's Too High!" : "📉 It's Too Low!";
            score = score - 1; 
            document.querySelector('.score').textContent = score;
            }else {
                displayMessage("🥶 You Lost the Game!");
                document.querySelector('body').style.backgroundColor = 'red';
                document.querySelector('.score').textContent = 0;
            }
        }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "🏁Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

// Keyboard Event Listener
document.addEventListener('keydown', function (e) {
    if (e.key === "Enter" && !document.querySelector('.score').classList.contains('score')) {
        document.querySelector('.check').click();
    }
});



const scores = {
games : 0,
wins : 0,
losses : 0,
draws : 0,
}

const choices = {
playerHand : '',
aiHand : '',
}

const hands = [...document.querySelectorAll('img')]

// wybór gracza

function playerHand(){

choices.playerHand = this.dataset.option
hands.forEach( hand => hand.style.boxShadow = '');
this.style.boxShadow = '0 0 0 10px red'
}

//wybór ai

function aiChoice(){
    return hands[Math.floor(Math.random()*3)].dataset.option
}

// obliczanie rozstrzygnięcia

function resultCount(player, ai){
    if(player === ai){
        return 'draw';
    } else if ((player === 'rock' && ai === 'scisors') || (player === 'paper' && ai === 'rock') || (player === 'scisors' && ai ==='paper')){
        return 'win';
    } else { return 'loss'}
}

// publikowanie wyniku

function finalResult(player, ai, result){
    document.querySelector('.playerWeapon').textContent = player;
    document.querySelector('.aiWeapon').textContent = ai;

    document.querySelector('.gamesTotal').textContent= ++scores.games

    if(result === 'win'){
        document.querySelector('.gamesWon').textContent = ++scores.wins
        document.querySelector('.whoWon').textContent = ' Zwyciężyłeś !'
        document.querySelector('.whoWon').style.color = 'green'
    } else if(result === 'loss'){
        document.querySelector('.gamesLost').textContent = ++scores.losses
        document.querySelector('.whoWon').textContent = ' Porażka ;/ !'
        document.querySelector('.whoWon').style.color = 'red'
    } else if(result === 'draw'){
        document.querySelector('.gamesDraw').textContent = ++scores.draws
        document.querySelector('.whoWon').textContent = ' Walczyliście jak lwy !'
        document.querySelector('.whoWon').style.color = 'grey'
    }
}

//zakończenie rozgrywki

function endGame(){
    document.querySelector(`[data-option="${choices.playerHand}"]`).style.boxShadow = "";
    choices.playerHand = "";
    choices.aiHand = "";
}

// wywołania

// start gry

function startGame(){
    if(!choices.playerHand){
        return alert('wybierz orędzie do walki !!')
    }
choices.aiHand = aiChoice()
const gameResult = resultCount(choices.playerHand, choices.aiHand)
finalResult(choices.playerHand, choices.aiHand, gameResult);
endGame()
}
document.querySelector('.start').addEventListener('click', startGame)
hands.forEach(hand => hand.addEventListener('click', playerHand ))
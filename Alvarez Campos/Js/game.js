let scores, roundScore, activePlayer, gamePlaying;
newGame();


//Button Roll
document.querySelector('.btn-roll').addEventListener('click', () =>{
  if(gamePlaying){
    //Random Number
    let dice = Math.floor(Math.random()*6)+1;
    //Display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' +dice + '.png';  
    //Update the round score IF the rolled number was not a 1
    if(dice !== 1){
      //add score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
      //next player   
      changePlayer();
    }
  }  
})


//Button Hold
document.querySelector('.btn-hold').addEventListener('click',() =>{
  if(gamePlaying){
    //Add current score to global score
    score[activePlayer]+=roundScore;
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    //Check if player won the game
    if(score[activePlayer] >= 100){
      document.querySelector('#name-'+activePlayer).textContent = 'Winner!!!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying=false;
    }else{
      changePlayer();
    }
  }
  

})


//Button New
document.querySelector('.btn-new').addEventListener('click',newGame);


//New Game
function newGame(){
  score= [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying=true;
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

  

}


//Function to change player
changePlayer = () =>{
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}
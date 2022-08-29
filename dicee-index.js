var firstRandomNumber = Math.floor(Math.random()*6)+1;

var firstDiceImage = './images/dice' + firstRandomNumber + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

//for second player
var secondRandomNumber = Math.floor(Math.random()*6)+1;

var secondDiceImage = './images/dice' + secondRandomNumber + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

if(firstRandomNumber > secondRandomNumber){
  document.querySelector('h1').innerHTML = 'PLAYER 1 WINS';
}
else if(firstRandomNumber < secondRandomNumber){
  document.querySelector('h1').innerHTML = 'PLAYER 2 WINS ';
}
else{
  document.querySelector('h1').innerHTML = 'BOTH PLAYER WIN ';
};

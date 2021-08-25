//Player 1 Dice Roll

var randomNumber1 = Math.floor(Math.random()*6+1);

if (randomNumber1 == 1) {
  document.querySelector("img").src = "images/dice1.png";

}else if (randomNumber1 == 2) {
    document.querySelector("img").src = "images/dice2.png";

}else if (randomNumber1 == 3) {
    document.querySelector("img").src = "images/dice3.png";
        
}else if (randomNumber1 == 4) {
    document.querySelector("img").src = "images/dice4.png";

}else if (randomNumber1 == 5) {
    document.querySelector("img").src = "images/dice5.png";

}else if (randomNumber1 == 6) {
    document.querySelector("img").src = "images/dice6.png";

}

// Player 2 Dice Roll 

var randomNumber2 = Math.floor(Math.random()*6+1);

if (randomNumber2 == 1) {
    document.getElementById('img2').src = "images/dice1.png";

}else if(randomNumber2 == 2) {
    document.getElementById('img2').src = "images/dice2.png";

}else if(randomNumber2 == 3) {
    document.getElementById('img2').src = "images/dice3.png";

}else if(randomNumber2 == 4) {
    document.getElementById('img2').src = "images/dice4.png";

}else if(randomNumber2 == 5) {
    document.getElementById('img2').src = "images/dice5.png";

}else if(randomNumber2 == 6) {
    document.getElementById('img2').src = "images/dice6.png";

}



// Checking the winner 

var player1_score = randomNumber1;
var player2_score = randomNumber2;

// document.querySelector("h1").innerHTML = "Player1 wins";

if (player1_score > player2_score) {   
    document.querySelector("h1").innerHTML = "Player 1 wins 🚩";

}else if(player1_score < player2_score) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";

}else {
    document.querySelector("h1").innerHTML = "Draw!";

}

//random number 1 to 6 inclusive for player 1
let randomNumber1 = Math.floor(Math.random()*6)+1;

//player 1 change dice image
let srcImage1 = `images/dice${randomNumber1}.png`;
document.querySelector(".dice .img1").setAttribute("src", srcImage1);

//random number 1 to 6 inclusive for player 2
let randomNumber2 = Math.floor(Math.random()*6)+1;

//player 2 change dice image
let srcImage2 = `images/dice${randomNumber2}.png`;
document.querySelector(".dice .img2").setAttribute("src", srcImage2);

//Display results, Player 1 Wins!,  Player 2 Wins! or Draw
let message = "";
if(randomNumber1 === randomNumber2){
    message = "Draw!";
}else if(randomNumber1 > randomNumber2){
    message = "Player 1 Wins!"
} else {
    message = "Player 2 Wins!";
}
//change h1 message
//use textContent, it is faster and prevents XSS attacks
document.querySelector("h1").textContent = message;
//document.querySelector("h1").innerHTML = message;



console.log(document.querySelector(".dice .img1"));
console.log(randomNumber1);
console.log(srcImage1);
console.log(srcImage2);
console.log(document.querySelector("h1").textContent);
console.log(message);
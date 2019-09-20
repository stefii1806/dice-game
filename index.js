//First dice

var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomImgSrc = "images/" + randomDiceImg;

var firstImg = document.querySelectorAll("img")[0];

firstImg.setAttribute("src", randomImgSrc);


//Second dice

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomImgSrc2 = "images/" + randomDiceImg2;

var secondImg = document.querySelectorAll("img")[1];

secondImg.setAttribute("src", randomImgSrc2);

//Change of title

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player one wins!";
} else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player two wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a tie!";
}
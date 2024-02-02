var images=['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];
var randomImage1= Math.floor(Math.random() * images.length);
var randomImage2= Math.floor(Math.random() * images.length);
var isload = true;
function pickImage() {
  document.querySelector('.img1').setAttribute("src",images[randomImage1]);
  document.querySelector('.img2').setAttribute("src",images[randomImage2]);
  document.querySelector("h1").style.fontSize = "6rem";
}



while (isload){
   pickImage();
  if (randomImage1 === randomImage2){
    document.querySelector("h1").innerHTML = "It's a draw";
    isload = false;
  }

  else if (randomImage1 > randomImage2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    isload = false;
  }

  else{
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
    isload = false;
  }
 }

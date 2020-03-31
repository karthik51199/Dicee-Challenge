var n1 = Math.random();
n1 = Math.floor(n1 * 6) + 1;

var n2 = Math.random();
n2 = Math.floor(n2 * 6) + 1;

if (n1 > n2)
  document.querySelector("h1").innerHTML = "Player1 won !";
else if (n1 < n2)
  document.querySelector("h1").innerHTML = "Player2 won !";
else
  document.querySelector("h1").innerHTML = "Draw !";

switch (n1) {
  case 1:
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  break;
  case 2:
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
  break;
  case 3:
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
  break;
  case 4:
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
  break;
  case 5:
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
  break;
  case 6:
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

switch (n2) {
  case 1:
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  break;
  case 2:
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  break;
  case 3:
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  break;
  case 4:
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  break;
  case 5:
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  break;
  case 6:
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

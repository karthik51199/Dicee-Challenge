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

document.querySelector(".img1").setAttribute("src", "images/dice"+n1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+n2+".png");

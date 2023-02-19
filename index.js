var random1= Math.floor(Math.random()*6)+1;
var dice1path="images/dice"+random1+".png";
document.querySelector(".img1").setAttribute("src",dice1path);

var random2= Math.floor(Math.random()*6)+1;
var dice2path="images/dice"+random2+".png";
document.querySelector(".img2").setAttribute("src",dice2path);

if(random1>random2){
    document.querySelector("h1").textContent="🚩Player 1 Wins!"
}else if(random1<random2){
    document.querySelector("h1").textContent="Player 2 Wins!🚩"
}else{
    document.querySelector("h1").textContent="Draw!"
}
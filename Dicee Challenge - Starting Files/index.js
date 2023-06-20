var randomnum1=Math.floor((Math.random()*6));
randomnum1+=1;
var randomnum2=Math.floor((Math.random()*6));
randomnum2+=1;
s="./images/dice"+randomnum1+".png";
document.getElementsByTagName("img")[0].setAttribute("src",s);
document.getElementsByTagName("img")[1].setAttribute("src",'./images/dice'+randomnum2+'.png')
if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Tie";
}
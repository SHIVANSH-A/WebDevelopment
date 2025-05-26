function roll(){
let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomNumber2 = Math.floor(Math.random()*6) + 1;

RandomNumbeGenerator(randomNumber1,"img1");
RandomNumbeGenerator(randomNumber2,"img2");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent = "🚩Draw🚩";
}else{
    document.querySelector("h1").textContent = "Player 2 Wins🚩";
}

}

function RandomNumbeGenerator(randomNumber,ImgGn){
    let imgNo= ImgGn;
    document.querySelector("."+imgNo).setAttribute("src","./images/dice"+randomNumber+".png");
    
}
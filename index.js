let min = 0;
let max = 1001;
let guess = 500;
let tries = 0;
let answer = document.getElementById("answer");

let higher = document.getElementById("higher");
let lower = document.getElementById("lower");
let won = document.getElementById("won");




higher.addEventListener("click", function(){
    min = guess;
    guess = Math.floor((max+guess)/2);
    answer.innerHTML = guess;
    tries++;
    console.log(tries);
});

lower.addEventListener("click", function(){
    max = guess;
    guess = Math.floor((min+guess)/2);
    answer.innerHTML = guess;
    tries++;
    console.log(tries);
});

won.addEventListener("click", function(){
    document.querySelector("#heading").classList.toggle("invisible");
    document.querySelector("#winMessage").classList.toggle("invisible");
    document.querySelector("#from").classList.toggle("invisible");
    document.querySelector("#isYourNum").classList.toggle("invisible");
    document.querySelector("#higher").classList.toggle("invisible");
    document.querySelector("#lower").classList.toggle("invisible");
    document.querySelector("#won").classList.toggle("invisible");
    document.querySelector("#restart").classList.toggle("invisible");
    document.querySelector("#tries").innerHTML = tries;
});

restart.addEventListener("click", function(){
    document.querySelector("#heading").classList.toggle("invisible");
    document.querySelector("#winMessage").classList.toggle("invisible");
    document.querySelector("#from").classList.toggle("invisible");
    document.querySelector("#isYourNum").classList.toggle("invisible");
    document.querySelector("#higher").classList.toggle("invisible");
    document.querySelector("#lower").classList.toggle("invisible");
    document.querySelector("#won").classList.toggle("invisible");
    document.querySelector("#restart").classList.toggle("invisible");
    min = 0;
    max = 1001;
    guess = 500;
    tries = 0;
    answer.innerHTML = guess;
});
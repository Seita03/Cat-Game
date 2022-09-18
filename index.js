// names of cats
const cats = ["Scottish Fold","Munchkin","Mix","American Shorhair","Norwegian Forest cat","British Shorthair","Ragdoll","Minuet","Bengali","Cybelean","Maine Coon","Russian","Ragamuffin","Exotic Shorthair","Chinchilla","Somali","Persia","American Curl","Exotic","Japanese"];

// images of cats
const catsImg = ["ScottishFold.jpg","Munchkin.jpg","Mix.jpg","AmericanShortHair.jpg","NorwegianForest.jpg","BritishShorthair.jpg","Ragdoll.jpg","Minuet.jpg","Bengali.jpg","Cybelean.jpg","MaineCoon.jpg","Russian.jpg","Ragamuffin.png","ExoticShorthair.jpg","Chinchilla.jpg","Somali.jpg","Persia.jpg","AmericanCurl.jpg","Exotic.jpg","Japanese.jpg"];

// the array to hold already used numbers to avoid the same questions are used
let alreadyUsedNum = [];

// public variables
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let catImage = document.getElementById('catImage');
let qNum = document.getElementById('qNum');
let correctAns = Math.floor(Math.random() * 4);
let num01;
let num02;
let num03;
let num04;
let choice01 = false;
let choice02 = false;
let choice03 = false;
let choice04 = false;
let maxQuizNum = 11;
let quizNum = 0;
let gameEnd = false;
let score = 0;
let gameScreen = document.getElementById("gameScreen");
let endScreen = document.getElementById("endScreen");
let scoreTxt = document.getElementById('score');

// the function called when the game starts
function GameStart() {
    location.href = "index02.html";
    changeQuizText();
}

// change quiz numbers and also end the game if the number reaches 10.
function changeQuizText() {
    quizNum++
    for(let i = 0; i < quizNum; i++){
        qNum.innerHTML = quizNum;
        if(quizNum == maxQuizNum){
            gameEnd = true;
        }
    }
}

// assign the cats' numbers to each choices
function decideFirstNumber() {
    num01 = Math.floor(Math.random() * 20);
    return num01;
}

function decideSecondNumber() {
    num02 = Math.floor(Math.random() * 20);
    return num02;
}

function decideThirdNumber() {
    num03 = Math.floor(Math.random() * 20);
    return num03;
}

function decideFourthNumber() {
    num04 = Math.floor(Math.random() * 20);
    return num04;
}

// display and change the cat images and four choices
function RandomCat() {
    changeQuizText();
    // call number decision funcions
    decideFirstNumber();
    decideSecondNumber();
    decideThirdNumber();
    decideFourthNumber();
    // reassign false to each choices when going to next quiestions
    choice01 = false;
    choice02 = false;
    choice03 = false;
    choice04 = false;

    // make sure every number is not the same
    while(num01 == num02){
        decideSecondNumber();
    };
    while(num01 == num03 || num02 == num03){
        decideThirdNumber();
    };
    while(num01 == num04 || num02 == num04 || num03 == num04){
        decideFourthNumber();
    }

    // these are just intermediary variables
    if(correctAns == 0){
        choice01 = true;
    } else if(correctAns == 1) {
        choice02 = true;
    } else if(correctAns == 2) {
        choice03 = true;
    } else {
        choice04 = true;
    }

    // make sure the same questions are not used and to display the correct image
    if(choice01){
        while(alreadyUsedNum.includes(num01)){
            decideFirstNumber();
        }
        catImage.src = "./images/" + catsImg[num01];
        alreadyUsedNum.push(num01);
    }

    if(choice02){
        while(alreadyUsedNum.includes(num02)){
            decideSecondNumber();
        }
        catImage.src = "./images/" + catsImg[num02];
        alreadyUsedNum.push(num02);
    }

    if(choice03) {
        while(alreadyUsedNum.includes(num03)){
            decideThirdNumber();
        }
        catImage.src = "./images/" + catsImg[num03];
        alreadyUsedNum.push(num03);
    }

    if(choice04) {
        while(alreadyUsedNum.includes(num04)){
            decideFourthNumber();
        }
        catImage.src = "./images/" + catsImg[num04];
        alreadyUsedNum.push(num04);
    }

    // change the texts of buttons
    first.innerHTML = cats[num01];
    second.innerHTML = cats[num02];
    third.innerHTML = cats[num03];
    fourth.innerHTML = cats[num04];

    endGame();
}

// check if the answer is correct or not
function checkAns(ansNum) {
    if (ansNum == correctAns) {
        alert("Are you sure?");
        alert("Correct!!!!");
        correctAns = Math.floor(Math.random() * 4);
        score++
        console.log(score);
        RandomCat();
    } else {
        alert("Are you sure?");
        alert("Wrong...");
        correctAns = Math.floor(Math.random() * 4);
        RandomCat();
    }
}

function endGame(){
    if(gameEnd){
        gameScreen.classList.add('gameScreen');
        endScreen.classList.remove('endScreen');
        scoreTxt.innerHTML = score;
    }
}

function restart() {
    location.href = "index.html";
}
// names of cats
const cats = ["Scottish Fold","Munchkin","Mix","American Shorhair","Norwegian Forest cat","British Shorthair","Ragdoll","Minuet","Bengali","Cybelean","Maine Coon","Russian","Ragamuffin","Exotic Shorthair","Chinchilla","Somali","Persia","American Curl","Exotic","Japanese"];

// images of cats
const catsImg = ["ScottishFold.jpg","Munchkin.jpg","Mix.jpg","AmericanShorthair.jpg","NorwegianForest.jpg","BritishShorthair.jpg","Ragdoll.jpg","Minuet.jpg","Bengali.jpg","Cybelean.jpg","MaineCoon.jpg","Russian.jpg","Ragamuffin.png","ExoticShorthair.jpg","Chinchilla.jpg","Somali.jpg","Persia.jpg","AmericanCurl.jpg","Exotic.jpg","Japanese.jpg"];

// the array to hold already used numbers to avoid the same questions are used
let alreadyUsedNum = [];

// public variables
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let catImage = document.getElementById('catImage');
let correctAns = Math.floor(Math.random() * 4);
let num01;
let num02;
let num03;
let num04;
let choice01 = false;
let choice02 = false;
let choice03 = false;
let choice04 = false;

// the function called when the game starts
function GameStart() {
    location.href = "index02.html";
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
        if(!alreadyUsedNum.includes(num01)){
            catImage.src = "./images/" + catsImg[num01];
        } else {
            decideFirstNumber();
        }
        alreadyUsedNum.push(num01);
        // console.log(alreadyUsedNum);
    } else if(choice02){
        if(!alreadyUsedNum.includes(num02)){
            catImage.src = "./images/" + catsImg[num02];
        } else {
            decideSecondNumber();
        }
        alreadyUsedNum.push(num02);
        // console.log(alreadyUsedNum);
    } else if (choice03){
        if(!alreadyUsedNum.includes(num03)){
            catImage.src = "./images/" + catsImg[num03];
        } else {
            decideThirdNumber();
        }
        alreadyUsedNum.push(num03);
        // console.log(alreadyUsedNum);
    } else{
        if(!alreadyUsedNum.includes(num04)){
            catImage.src = "./images/" + catsImg[num04];
        } else {
            decideFourthNumber();
        }
        alreadyUsedNum.push(num04);
        // console.log(alreadyUsedNum);
    }
    
    first.innerHTML = cats[num01];
    second.innerHTML = cats[num02];
    third.innerHTML = cats[num03];
    fourth.innerHTML = cats[num04];
}

// check if the answer is correct or not
function checkAns(ansNum) {
    if (ansNum == correctAns) {
        alert("Are you sure?");
        alert("Correct!!!!");
        correctAns = Math.floor(Math.random() * 4);
        RandomCat();
    } else {
        alert("Are you sure?");
        alert("Wrong...");
        correctAns = Math.floor(Math.random() * 4);
        RandomCat();
    }
}
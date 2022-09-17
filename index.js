// names of cats
const cats = ["Scottish Fold","Munchkin","Mix","American Shorhair","Norwegian Forest cat","British Shorthair","Ragdoll","Minuet","Bengali","Cybelean","Maine Coon","Russian","Ragamuffin","Exotic Shorthair","Chinchilla","Somali","Persia","American Curl","Exotic","Japanese"];

// images of cats
const catsImg = ["ScottishFold.jpg","Munchkin.jpg","Mix.jpg","AmericanShorthair.jpg","NorwegianForest.jpg","BritishShorthair.jpg","Ragdoll.jpg","Minuet.jpg","Bengali.jpg","Cybelean.jpg","MaineCoon.jpg","Russian.jpg","Ragamuffin.png","ExoticShorthair.jpg","Chinchilla.jpg","Somali.jpg","Persia.jpg","AmericanCurl.jpg","Exotic.jpg","Japanese.jpg"];

// public variables
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let catImage = document.getElementById('catImage');
let correctAns = Math.floor(Math.random() * 4);

// check if the answer is correct or not
function checkAns(ansNum) {
    if (ansNum == correctAns) {
        alert("Are you sure?");
        alert("Correct!!!!");
        RandomCat();
        correctAns = Math.floor(Math.random() * 4);
    } else {
        alert("Are you sure?");
        alert("Wrong...");
    }
    
}

// the function called when the game starts
function GameStart() {
    location.href = "index02.html";
}

function RandomCat() {
    let num01 = Math.floor(Math.random() * 20);
    let num02 = Math.floor(Math.random() * 20);
    let num03 = Math.floor(Math.random() * 20);
    let num04 = Math.floor(Math.random() * 20);

    while(num01 == num02){
        num02 = Math.floor(Math.random() * 20);
    };
    while(num01 == num03 || num02 == num03){
        num03 = Math.floor(Math.random() * 20);
    };
    while(num01 == num04 || num02 == num04 || num03 == num04){
        num04 = Math.floor(Math.random() * 20);
    }

    first.innerHTML = cats[num01];
    second.innerHTML = cats[num02];
    third.innerHTML = cats[num03];
    fourth.innerHTML = cats[num04];

    let randomNum = Math.floor(Math.random() * 20);
    catImage.src = "./images/" + catsImg[randomNum];
}


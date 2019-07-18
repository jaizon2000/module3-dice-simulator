// Dice Game
'use strict';

// Event Functions
document.getElementById('play-btn').addEventListener('click', playGame);
document.getElementById('purchase-btn').addEventListener('click', buyLoot);
// RISKS
document.getElementById('risk2').addEventListener('click', Risk2);
document.getElementById('risk5').addEventListener('click', Risk5);
document.getElementById('risk10').addEventListener('click', Risk10);
document.getElementById('risk1000').addEventListener('click', Risk1000);
document.getElementById('risk5000').addEventListener('click', Risk5000);
document.getElementById('risk1Mil').addEventListener('click', Risk1Mil);

// Global Vars
let funds = 5000;

let risk = false;
let riskNum = 0;

// Functions
function playGame() {
    let displayFunds = document.getElementById('funds');

    let houseRand = Math.floor(Math.random() * 6) + 1;
    let playerRand = Math.floor(Math.random() * 6) + 1;  
    
    // Display Die
    let house = document.getElementById('house-die');
    house.src = 'images/' + houseRand + '.png';

    let player = document.getElementById('player-die');
    player.src = 'images/' + playerRand + '.png';

    // Compare and Change funds
    compareDie(houseRand, playerRand);
    // After funds calculated, check if < 0
    if (funds <= 0) {
        document.getElementById('kicked').classList.remove('hide');
        console.log('poor');
    }

    displayFunds.innerHTML = funds;
}



// RISKY GAME
let risk2Btn = document.getElementById('risk2');
let risk5Btn = document.getElementById('risk5');
let risk10Btn = document.getElementById('risk10');
let risk1000Btn = document.getElementById('risk1000');
let risk5000Btn = document.getElementById('risk5000');
let risk1MilBtn = document.getElementById('risk1Mil');

// RISK FUNCTIONS
function Risk2() {
    risk = true;
    riskNum = 2;
    risk2Btn.classList.add('active');

    risk5Btn.classList.remove('active');
    risk10Btn.classList.remove('active');
    risk5000Btn.classList.remove('damnActive');
    risk1000Btn.classList.remove('damnActive');
    risk1MilBtn.classList.remove('gamblerActive');
}

function Risk5() {
    risk = true;
    riskNum = 5;
    risk5Btn.classList.add('active');

    risk2Btn.classList.remove('active');
    risk10Btn.classList.remove('active');
    risk5000Btn.classList.remove('damnActive');
    risk1000Btn.classList.remove('damnActive');
    risk1MilBtn.classList.remove('gamblerActive');
}

function Risk10() {
    risk = true;
    riskNum = 10;
    risk10Btn.classList.add('active');

    risk5000Btn.classList.remove('damnActive');
    risk1000Btn.classList.remove('damnActive');
    risk2Btn.classList.remove('active');
    risk5Btn.classList.remove('active');
    risk1MilBtn.classList.remove('gamblerActive');
}

function Risk1000() {
    risk = true;
    riskNum = 1000;
    risk1000Btn.classList.add('damnActive');

    risk5000Btn.classList.remove('damnActive');
    risk2Btn.classList.remove('active');
    risk5Btn.classList.remove('active');
    risk10Btn.classList.remove('active');
    risk1MilBtn.classList.remove('gamblerActive');
}

function Risk5000() {
    risk = true;
    riskNum = 5000;
    risk5000Btn.classList.add('damnActive');

    risk10Btn.classList.remove('active');
    risk1000Btn.classList.remove('damnActive');
    risk2Btn.classList.remove('active');
    risk5Btn.classList.remove('active');
    risk1MilBtn.classList.remove('gamblerActive');

}

function Risk1Mil() {
    risk = true;
    riskNum = 1000000;
    risk1MilBtn.classList.add('gamblerActive');

    risk10Btn.classList.remove('active');
    risk5000Btn.classList.remove('damnActive');
    risk1000Btn.classList.remove('damnActive');
    risk2Btn.classList.remove('active');
    risk5Btn.classList.remove('active');
}

// -------- END OF RISK FUNCTIONS ----------


// Compares Value of Die
function compareDie(houseRand, playerRand) {

    let bet = Number(document.getElementById('bet-input').value);
    if (bet == 0) {
        bet == 1;
    }

    if (playerRand > houseRand) {

        if (risk == false) {
            funds += bet;
        } else if (risk == true) {
            funds += bet * riskNum;
        }

    } else if (playerRand < houseRand) {
        if (risk == false) {
            funds -= bet;
        } else if (risk == true) {
            funds -= bet * riskNum;
        }
    }
    // console.log('bet: ' + funds);
}

// Purchase Loot
function buyLoot() {
    let loot = document.getElementById('loot');
    let img = '';


    if (funds < 1000) { // $$$ < 1000
        img = 'socks.png'

    } else if (funds >= 1000 && funds <= 5000) { // $$$ 1000-5000
        let rand = Math.floor(Math.random() * 3) + 1;
        if (rand == 1) {
            img = 'ring.png';
        } else if (rand == 2) {
            img = 'bike.jpg';
        } else {
            img = 'trip.jpg';
        }
        funds -= 1000;


    } else if (funds > 5000) { //  $$$ > 5000
        let rand = Math.floor(Math.random() * 4) + 1;
        // console.log(rand);

        if (rand == 1) {
            img = 'motorcycle.jpg';
        } else if (rand == 2) {
            img = 'house.png';
        } else if (rand == 3) {
            img = 'boat.png';
        } else {
            img = 'car.png';
        }
        funds -= 5000;
    }

    // ADD IMG TO LOOT TABLE
    loot.innerHTML += '<img src="images/' + img + '">';
    // console.log('buy: ' + funds);

}
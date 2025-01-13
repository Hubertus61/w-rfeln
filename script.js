// JavaScript Datei: script.js
const diceContainer = document.getElementById('diceContainer');
const numDiceSelect = document.getElementById('numDice');

function createDice(num) {
    diceContainer.innerHTML = ''; // Clear existing dice
    for (let i = 0; i < num; i++) {
        const die = document.createElement('div');
        die.classList.add('die');
        const img = document.createElement('img');
        img.src = i === 0 ? 'images/wuerfel0.jpg' : 'images/wuerfel0.jpg'; // Default die face
        img.alt = 'Die face';
        die.appendChild(img);
        diceContainer.appendChild(die);
    }
}

function rollDice() {
    const numDice = parseInt(numDiceSelect.value, 10);
    createDice(numDice); // Ensure correct number of dice displayed

    const dice = diceContainer.getElementsByClassName('die');
    for (let die of dice) {
        const roll = Math.floor(Math.random() * 6) + 1;
        const img = die.querySelector('img');
        img.src = `images/wuerfel${roll}.jpg`;
    }
    let sound = new Audio("sounds/wuerfeln.mp3");
    sound.play();
}

function resetDice() {
    diceContainer.innerHTML = ''; // Clear dice
    numDiceSelect.value = '1'; // Reset dropdown to default
}

// Initialize with one die
createDice(1);

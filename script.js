// ==============================
// ELEMENTS
// ==============================

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const endScreen = document.getElementById("endScreen");

const playersInput = document.getElementById("playersInput");

const startButton = document.getElementById("startButton");

const revealButton = document.getElementById("revealButton");

const nextButton = document.getElementById("nextButton");

const newGameButton = document.getElementById("newGameButton");

const playerNumber = document.getElementById("playerNumber");

const resultBox = document.getElementById("resultBox");

const resultIcon = document.getElementById("resultIcon");

const resultText = document.getElementById("resultText");

const passScreen = document.getElementById("passScreen");

const errorMessage = document.getElementById("errorMessage");


// ==============================
// GAME VARIABLES
// ==============================

let playersCount = 0;

let currentPlayer = 1;

let winkPlayer = 0;


// ==============================
// START GAME
// ==============================

startButton.addEventListener("click", function () {

    playersCount = Number(playersInput.value);


    // Check number of players

    if (
        playersCount < 2 ||
        !Number.isInteger(playersCount)
    ) {

        errorMessage.textContent =
            "اكتب عدد صحيح من اللاعبين، ويكون 2 أو أكتر.";

        return;
    }


    // Clear error

    errorMessage.textContent = "";


    // ==============================
    // PICK THE WINK PLAYER
    // ==============================

    winkPlayer =
        Math.floor(Math.random() * playersCount) + 1;


    // First player

    currentPlayer = 1;


    // Show game screen

    startScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");


    updatePlayer();


    // للتجربة فقط أثناء البرمجة
    console.log("Wink Player:", winkPlayer);

});


// ==============================
// UPDATE PLAYER
// ==============================

function updatePlayer() {

    playerNumber.textContent = currentPlayer;

    revealButton.classList.remove("hidden");

    resultBox.classList.add("hidden");

    passScreen.classList.add("hidden");

}


// ==============================
// REVEAL RESULT
// ==============================

revealButton.addEventListener("click", function () {

    // Prevent double click

    revealButton.disabled = true;


    // ==============================
    // CHECK IF WINK PLAYER
    // ==============================

    if (currentPlayer === winkPlayer) {

        resultIcon.textContent = "😈";

        resultText.textContent = "أنت الغماز!";

    } else {

        resultIcon.textContent = "😇";

        resultText.textContent = "مش أنت الغماز";

    }


    // Hide reveal button

    revealButton.classList.add("hidden");


    // Show result

    resultBox.classList.remove("hidden");


    // ==============================
    // HIDE RESULT AFTER 2.5 SECONDS
    // ==============================

    setTimeout(function () {

        resultBox.classList.add("hidden");

        passScreen.classList.remove("hidden");

        revealButton.disabled = false;

    }, 2500);

});


// ==============================
// NEXT PLAYER
// ==============================

nextButton.addEventListener("click", function () {

    currentPlayer++;


    // ==============================
    // CHECK IF GAME FINISHED
    // ==============================

    if (currentPlayer > playersCount) {

        gameScreen.classList.add("hidden");

        endScreen.classList.remove("hidden");

        return;
    }


    // Next player

    updatePlayer();

});


// ==============================
// NEW GAME
// ==============================

newGameButton.addEventListener("click", function () {

    // Reset variables

    playersCount = 0;

    currentPlayer = 1;

    winkPlayer = 0;


    // Reset input

    playersInput.value = "";


    // Reset screens

    endScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

});
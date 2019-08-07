// setting values for gems

//gem 1 = 1-10, guesses 1-5
let gem1 = Math.floor(Math.random()*10) +1;
let guess1 = Math.floor(Math.random()*6)+1;

//gem 2 = 2-13, guesses 1-3
let gem2 = Math.floor(Math.random() * 12) +1;
let guess2 = Math.floor(Math.random() * 3) +1;

//gem 3 = 3-16, guesses 1-2
let gem3 = Math.floor(Math.random() * 16) +1;
let guess3= Math.floor(Math.random() * 2) +1;

//gem 4 = 1-5, guesses 1-8
let gem4 = Math.floor(Math.random() * 5) + 1;
let guess4 = Math.floor(Math.random() * 8) + 1;

//Value for combined random gem amounts and Amount needed
let correctAmount = (gem1 * guess1) + (gem2 * guess2) + (gem3 * guess3) + (gem4 * gem4);

//put the gems into a array, along with the images
let gemArray = [gem1,gem2,gem3,gem4];
let gemImgArray = ["assets/images/Blue_crystal.jpg", "assets/images/green_crystal.jpg", "assets/images/purple_crystal.jpg", "assets/images/red_crystal.jpg"];
document.getElementById("valueToGuess").innerHTML = correctAmount;
let pGuessTotal =0;
let gameRunning = true;
let loseCounter = 0;
let winCounter = 1;

for(i = 0; i < 4; i++){
    const crystalID = document.createElement("img");
    crystalID.classList.add("crystalClass");
    crystalID.setAttribute("src",gemImgArray[i]);
    crystalID.width = "150";
    crystalID.height="150";
    crystalID.setAttribute("crystalValue", gemArray[i]);
    document.getElementById("crystals").append(crystalID);
}
 document.querySelectorAll(".crystalClass").forEach(function (clicker){
    clicker.addEventListener("click", function() {
        if(gameRunning === true){
        let crystalNumber = clicker.getAttribute("crystalValue");
        crystalNumber = parseInt(crystalNumber);
        pGuessTotal = crystalNumber + pGuessTotal;
        document.getElementById("valueCurrentGuess").innerHTML = pGuessTotal;

        if(pGuessTotal === correctAmount){
            winCounter++;
            gameRunning = false;
        }
        else if (pGuessTotal > correctAmount){
            loseCounter++;
            gameRunning = false;
        }
    }
    else{
        // gameRunning = true;
    }
})
 })

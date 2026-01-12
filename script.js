console.log("Script Running");


const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;



// Query selectors for all buttons and scooters go here
const pepperoniButton = document.querySelector("#pepperoni-button");
const veggieButton = document.querySelector("#veggie-button");
const bbqButton = document.querySelector("#bbq-button"); 


// Write the function that moves the pepperoni scooter forward
// Increase the pepperoni position
// Call the helper function to update the scooter position
// Call the winner check function
const advancePepperoni = (e) => {
    console.log("clicked");
    pepperoni_position +=1; 
    changePosition(pepperoniSprite, pepperoni_col);
    checkWinner(pepperoni_position, "Pepperoni");
 pepperoniSprite.alt = `pepperoni sprite at col ${pepperoni_col} out of 5`;
};



// Write the function that moves the veggie scooter forward
const advanceVeggie = (e) => {
    console.log("clicked");
    veggie_position +=1;
    changePosition(veggieSprite, veggie_col);
    checkWinner(veggie_position, "Veggie");
    veggieSprite.alt = `veggie sprite at col ${veggie_col} out of 5`; 
};


// Write the function that moves the bbq scooter forward
const advanceBbq = (e) => {
    console.log("clicked");
    bbq_position +=1; 
    changePosition(bbqiSprite, bbq_col);
    checkWinner(bbq_position, "bbq");
 bbqiSprite.alt = `bbq sprite at col ${pepperoni_col} out of 5`;
};


// Write a function that checks if a scooter reached column 7
// If so, display the winner message
// Disable all buttons when a winner is found

if(position === 5) {
    WinnerText.innerHTML = color + "is the Winner !" ; 
}

// Add event listeners for each button
// Each button should trigger its own movement function
pepperoniButton.addEventListener("click", advancePepperoni);
 veggieButton.addEventListener("click", advanceVeggie);
 bbqButton.addEventListener("click", advanceBbq );
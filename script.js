let form = document.querySelector("form");
let inputvalue = document.getElementById("inputbox");
let ranno = document.querySelector("#ranno");
let message = document.getElementById("message");
let container = document.querySelector(".container");
let congrats = document.querySelector(".container2");
let reloadbtn = document.querySelector("#reload");
let randomNr 

document.addEventListener('DOMContentLoaded', () => {
    inputvalue.focus();
 }, false);

ranno.addEventListener("click",() => {
    randomNr = Math.floor(Math.random()*100);
    message.textContent = "Random Number Generated Now Guess That Number"
    inputvalue.focus();
})

form.addEventListener("submit",(event) => {
    event.preventDefault();
    let guessedNr = inputvalue.value;
        if(guessedNr > randomNr && guessedNr <= 100) {
            message.textContent = "Your Guess Is Too High.";
        }else if(guessedNr < randomNr && guessedNr >= 0) {
            message.textContent = "Your Guess Is Too Low.";
        }else if(guessedNr == randomNr) {
            message.textContent = "Your Guess Is Right, You Wins.";
            container.style.display = "none";
            congrats.style.display = "grid";
            reloadbtn.addEventListener("click", () => {
                window.location.reload();
            })
        }else if(guessedNr < 0 || guessedNr > 100) {
            message.textContent = "Enter Values Between 1 - 100.";
        }else {
            message.textContent = "Press Random Number Button Mad.";
        }
    inputvalue.focus();
})
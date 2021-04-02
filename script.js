//displayt de nummers en som
const displayNumbers = document.querySelector(".displaynumbers")
function display() {
    displayNumbers.textContent = currentNumber;
}

let firstNumber = "";
let secondNumber = "";
let currentNumber = "";
let operator = "";

//maakt nummer a of b de juiste nummer
function xNumber() {
    if (operator === "") {
        firstNumber = currentNumber;
        console.log(firstNumber);
        display();
    } else {
        secondNumber = currentNumber;
        console.log(secondNumber);
        display();
    }

}

const operators = document.querySelectorAll(".operator");

operators.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") {
            operator = e.target.innerText;
            currentNumber = "";
        } else {
            switch (operator) {
                case "+":
                    console.log(firstNumber + secondNumber);
                    displayNumbers.textContent = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
                    break;
                case "-":
                    console.log(firstNumber + secondNumber);
                    displayNumbers.textContent = parseInt(firstNumber, 10) - parseInt(secondNumber, 10);
                    break;
                case "/":
                    console.log(firstNumber + secondNumber);
                    displayNumbers.textContent = parseInt(firstNumber, 10) / parseInt(secondNumber, 10);
                    break;
                case "x":
                    console.log(firstNumber + secondNumber);
                    displayNumbers.textContent = parseInt(firstNumber, 10) * parseInt(secondNumber, 10);
                    break;
                default:
                    break;
            }

        }
    })
})

//clear eventlistener
const butClear = document.querySelector(".clear")
butClear.addEventListener("click", () => {
    currentNumber = "";
    firstNumber = "";
    secondNumber = "";
    operator = ""
    displayNumbers.textContent = "0";
})

//numbers eventlisteners
const butNul = document.querySelector(".nul")
butNul.addEventListener('click', () => {
    currentNumber += "0";
    xNumber();
})
const butOne = document.querySelector(".een")
butOne.addEventListener('click', () => {
    currentNumber += "1";
    xNumber();
})
const butTwee = document.querySelector(".twee")
butTwee.addEventListener('click', () => {
    currentNumber += "2";
    xNumber();
})
const butDrie = document.querySelector(".drie")
butDrie.addEventListener('click', () => {
    currentNumber += "3";
    xNumber();
})
const butVier = document.querySelector(".vier")
butVier.addEventListener('click', () => {
    currentNumber += "4";
    xNumber();
})
const butVijf = document.querySelector(".vijf")
butVijf.addEventListener('click', () => {
    currentNumber += "5";
    xNumber();
})
const butZes = document.querySelector(".zes")
butZes.addEventListener('click', () => {
    currentNumber += "6";
    xNumber();
})
const butZeven = document.querySelector(".zeven")
butZeven.addEventListener('click', () => {
    currentNumber += "7";
    xNumber();
})
const butAcht = document.querySelector(".acht")
butAcht.addEventListener('click', () => {
    currentNumber += "8";
    xNumber();
})
const butNegen = document.querySelector(".negen")
butNegen.addEventListener('click', () => {
    currentNumber += "9";
    xNumber();
})



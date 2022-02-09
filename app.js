// let count = 0

// console.log(count)

// var myage = 18
// console.log(myage)
// document.getElementById("count-el ").innerText = count

// var myage = 18
// var humandogratio = 7

// let myDogAge = myage*humandogratio
// console.log(myDogAge)

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
console.log(saveEl);
var welcomeEl = document.getElementById("welcome-el");
var name = "Suhani";
var greeting = " How are you ";
welcomeEl.innerText = name + greeting;

welcomeEl.innerText = welcomeEl.innerText + "😊";

console.log(countEl);
let lap1 = 0;
function increment() {
  console.log("Button was clicked");
  count += 1;
  countEl.innerText = count;

  // console.log(lap1++)
}

function save() {
  let saveDash = count + " - ";
  saveEl.textContent += saveDash;
  count = 0;
  countEl.innerText = count;
}

let lap2 = 33;
let lap3 = 36;

function countdown() {
  let final_lap = lap1 + lap2 + lap3;
  console.log(final_lap);
}

let errorEl = document.getElementById("error");

function error() {
  errorEl.innerText = "Error";
}

let num1 = 8;
let num2 = 2;

let addEl = document.getElementById("add-el");
let subEl = document.getElementById("sub-el");
let divideEl = document.getElementById("divide-el");
let multiplyEl = document.getElementById("multiply-el");
let finalResult = document.getElementById("final-result");
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
  sum = num1 + num2;
  finalResult.textContent = "Sum: " + sum;
}

function sub() {
  sub = num1 - num2;
  finalResult.textContent = "Subtraction: " + sub;
}

function divide() {
  dvd = num1 / num2;
  finalResult.textContent = "Division: " + dvd;
}

function multiply() {
  mult = num1 * num2;
  finalResult.textContent = "Multiplication: " + mult;
}

// let firstCard = Math.floor(Math.random() * 13 + 1);
// let secondCard = Math.floor(Math.random() * 13 + 1);
// let final_sum = firstCard + secondCard;
// let cards = [firstCard, secondCard];
// let hasBlackJack = false;
// let isAlive = true;
// let message = "";

let cards = [];
let final_sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
console.log(message);

let messageEl = document.getElementById("message-el");
let gameElement = document.getElementById("game-element");
let Sum = document.getElementById("sum");
let Cards = document.getElementById("cards");

// let randomNumber = Math.floor(Math.random() * 13);

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13 + 1);
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

console.log(randomNumber);
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];
  final_sum = firstCard + secondCard;

  renderGame();
}
function renderGame() {
  Sum.innerText = "Sum: " + final_sum;
  Cards.innerText = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    Cards.textContent += cards[i] + " ";
  }
  // gameElement.innerText="Game has Started"
  if (final_sum <= 20) {
    message = "Do you want to draw a another card 🙂";
  } else if (final_sum === 21) {
    message = "Wohoo You've won the blackjack 🤩";
    hasBlackJack = true;
  } else {
    message = "You're out of the game 😶";
    isAlive = false;
  }
  messageEl.innerText = message;

  // Cards.textContent = "Cards: "+ cards[0] + " " + cards[1]
}

//clearFields()

function clearFields() {
  messageEl.innerText = "";
  Sum.innerText = "Sum: ";
  Cards.innerText = "Cards: ";
}

function newCard() {
  console.log("New Card is generated");

  if (isAlive === true && hasBlackJack === false) {
    let newcard = getRandomCard();
    final_sum += newcard;
    cards.push(newcard);
    renderGame();
    // Cards.innerText += cards.push(newcard);
    // Sum.innerText = "Sum: " + final_sum;

    console.log(cards);
  }
}

// let count = 0

// console.log(count)

// var myage = 18
// console.log(myage)
// document.getElementById("count-el ").innerText = count

// var myage = 18

// var humandogratio = 7

// let myDogAge = myage*humandogratio
// console.log(myDogAge)

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;
console.log(saveEl)
var welcomeEl = document.getElementById("welcome-el")
var name = "Suhani"
var greeting = " How are you "
welcomeEl.innerText = name + greeting; 

welcomeEl.innerText = welcomeEl.innerText + "😊"


console.log(countEl)
let lap1 = 0;
function increment() {
    
    console.log("Button was clicked")
    count += 1;
    countEl.innerText = count;
    // console.log(lap1++)
}

function save() {
   let saveDash = count + " - "
   saveEl.textContent += saveDash
}

let lap2 = 33;
let lap3 = 36;


function countdown()
{
    let final_lap = lap1 + lap2 + lap3;
    console.log(final_lap)
};


// countEl.addEventListener("click", increment);
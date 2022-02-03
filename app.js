// let count = 0

// console.log(count)

// var myage = 18
// console.log(myage)
// document.getElementById("count-el ").innerText = count

// var myage = 18

// var humandogratio = 7

// let myDogAge = myage*humandogratio
// console.log(myDogAge)

let countEl = document.getElementById("count-el");
console.log(countEl)
let lap1 = 0;
function increment() {
    
    console.log("Button was clicked")
    lap1 = lap1+1;
    countEl.innerText = lap1;
    // console.log(lap1++)
}

function save() {
    console.log(lap1)
}

let lap2 = 33;
let lap3 = 36;


function countdown()
{
    let final_lap = lap1 + lap2 + lap3;
    console.log(final_lap)
};

// countEl.addEventListener("click", increment);
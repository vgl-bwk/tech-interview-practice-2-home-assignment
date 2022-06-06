const body = document.querySelector("body");
const countUpBtn = document.getElementById("countUpBtn");
const countDwnBtn = document.getElementById("countDwnBtn");
const counterDisplay = document.getElementById("counterDisplay");

let counter = 0;
counterDisplay.innerHTML = counter;

function countUp() {
  counter = counter + 1;
  counterDisplay.innerHTML = counter;
}

function countDwn() {
  counter = counter - 1;
  counterDisplay.innerHTML = counter;
}

countUpBtn.onclick = countUp;
countDwnBtn.onclick = countDwn;

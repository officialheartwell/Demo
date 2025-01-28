"use strick";
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.querySelector(".btn");
const color = document.querySelector(".code");

button.addEventListener("click", () => {
  let hexColorOne = "#";
  let hexColorTwo = "#";

  for (let i = 0; i < 6; i++) {
    hexColorOne += hex[randomNum()];
    hexColorTwo += hex[randomNumTwo()];
  }
  document.body.style.background = `linear-gradient(45deg, ${hexColorOne}, ${hexColorTwo})`;
  color.textContent = `${hexColorOne}, ${hexColorTwo}`;
});

function randomNumTwo() {
  return Math.trunc(Math.random() * hex.length);
}

function randomNum() {
  return Math.trunc(Math.random() * hex.length);
}

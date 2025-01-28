"use strick";
const button = document.querySelector(".btn");
// const container = document.querySelector(".container");
const color = document.querySelector(".code");

const colors = ["coral", "yellow", "green", "gold"];
// let index = 0;

button.addEventListener("click", () => {
  let randomNumber = Math.trunc(Math.random() * colors.length);

  document.body.style.background = colors[randomNumber];
  color.textContent = colors[randomNumber];

  //   index = (index + 1) % colors.length;
});


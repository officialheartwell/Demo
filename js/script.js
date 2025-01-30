"use strick";
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let counter = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("decrease")) {
      counter--;
    } else if (button.classList.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > 0) {
      display.style.color = "green";
    } else if (counter < 0) {
      display.style.color = "red";
    } else {
      display.style.color = "black";
    }
    display.textContent = counter;
  });
});

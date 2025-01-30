"use strick";
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const display = document.querySelector(".display");

let index = 0;

increase.addEventListener("click", () => {
  index++;
  display.textContent = index;
  if (index === +1) {
    display.style.color = "green";
   } else if ((index === 0)) {
    display.style.color = "black";
  }
  console.log(index);
});

reset.addEventListener("click", () => {
  index = 0;
  display.textContent = index;
  if (index === 0) {
    display.style.color = "black";
  }
});

decrease.addEventListener("click", () => {`23`
  index--;
  display.textContent = index;
  if (index === -1) {
    display.style.color = "red";
  } else if ((index === 0)) {
    display.style.color = "black";
  }
});

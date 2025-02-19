"use strick";
const showModal = document.querySelectorAll(".img");
//button selction

//Modal content Selection
const modalOne = document.querySelector(".modal-one");
const modalTwo = document.querySelector(".modal-two");
const modalThree = document.querySelector(".modal-three");

//content to review
const answer = document.createElement("p");
answer.classList.add("hidden");


for (let i = 0; i < showModal.length; i++) {
  //Modal One
  showModal[0].addEventListener("click", () => {
    answer.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde quasi suscipit magni harum voluptatibus, ratione veritatis maxime nam veniam!";
    modalOne.appendChild(answer);
    answer.classList.toggle("hidden");
  });

  //Modal Two
  showModal[1].addEventListener("click", () => {
    answer.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde quasi suscipit magni harum voluptatibus, ratione veritatis maxime nam veniam!";
    modalTwo.appendChild(answer);
    answer.classList.toggle("hidden");
  });

  //   Modal three
  showModal[2].addEventListener("click", () => {
    answer.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde quasi suscipit magni harum voluptatibus, ratione veritatis maxime nam veniam!";
    modalThree.appendChild(answer);
    answer.classList.toggle("hidden");
  });
}

// const minus = document.querySelector('.img');

showModal.src = "/images/minus.png";

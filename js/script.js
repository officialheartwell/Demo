"use strick";
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img: "/images/image-jeanette.jpg",
    text: "The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.",
  },
  {
    id: 2,
    name: "Kira Clifford",
    job: "Web Designer",
    img: "/images/image-kira.jpg",
    text: "Verified Graduate I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth. “ I was an EMT for many years before I joined the bootcamp.",
  },
  {
    id: 3,
    name: "Tyron Tanya",
    job: "Project Manager",
    img: "/images/image-tanya.jpg",
    text: "I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life.",
  },
  {
    id: 4,
    name: "Jonathan Morgan",
    job: "Business Manager",
    img: "/images/image-jonathan.jpg",
    text: "I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ” Jeanette Harmon Verified Graduate An overall wonderful and rewarding experience “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
  },
  {
    id: 5,
    name: "Victor Arron",
    job: "Business Manager",
    img: "/images/image-victor.jpg",
    text: " The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
  },
];

//Selection of Items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//Selection of button
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector("#random-btn");

//Set the Starting Item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  // showMode(currentItem);
});

function showMode(person) {
  let item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", () => {
  showMode(currentItem);
  currentItem = (currentItem + 1) % reviews.length;
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showMode(currentItem);
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
   showMode(currentItem);
});

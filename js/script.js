"use strick";
const randomQuote = [
  {
    quote:
      "We can do whatever we wish to do provided our wish is strong enough. What do you want most to do? That's what I have to keep asking myself, in the face of difficulties.",
    author: "Katherine Mansfield",
  },
  {
    quote: "Love makes the wildest spirit tame, and the tamest spirit wild.",
    author: "Alexis Delp",
  },
  {
    quote:
      "Great men undertake great things because they are great; fools, because they think them easy.",
    author: "Vauvenargues",
  },
  {
    quote:
      "We must each find our separate meaning in the persuasion of our days until we meet in the meaning of the world.",
    author: "Christopher Fry",
  },
  {
    quote:
      "Courage is the first of the human qualities because it is the quality which guarantees all the others.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Courage is the most important of all virtues, because without it we can't practice any other virtue with consistency.",
    author: "Maya Angelou",
  },
  {
    quote:
      "Courage is the greatest of all the virtues. Because if you haven't courage, you may not have an opportunity to use any of the others.",
    author: "Samuel Johnson",
  },
  {
    quote:
      "Courage is the best slayer-courage which attacketh, for in every attack there is the sound of triumph.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "When we think we lead we most are led.",
    author: " Lord Byron",
  },
  {
    quote:
      "An army of stags led by a lion would be better than an army of lions led by a stag.",
    author: "Latin proverb",
  },
  {
    quote:
      "Fear is the denomination of the Old Testament; belief is the denomination of the New.",
    author: "Benjamin Whichcote",
  },
];

const newQuote = document.querySelector(".btn");
const quote = document.getElementById("quote");
const author = document.querySelector(".author");

let currentQuote = 0;

newQuote.addEventListener("click", () => {
  let randomNun = Math.trunc(Math.random() * randomQuote.length);
  console.log(randomNun);

  let quotetext = randomQuote[randomNun];
  quote.textContent = quotetext.quote;
  author.textContent = quotetext.author;
  // currentQuote++;
  currentQuote = (currentQuote + 1) % randomQuote.length;
  // console.log(currentQuote);
});

// function randomNum(){
//   return Math.trunc(Math.)
// }

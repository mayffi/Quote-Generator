//variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

const quotes = [
  {
    quote: "To choose to write is to reject silence.",
    author: "Chimamanda Ngozi Adichie",
  },
  {
    quote:
      "If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway. It's easy to tell when a question is coming from a good place. Then listen some more. Sometimes people just want to feel heard. Here's to possibilities of friendship and connection and understanding.",
    author: "Chimamanda Ngozi Adichie",
  },
  {
    quote:
      "This was love: a string of coincidences that gathered significance and became miracles.",
    author: "Yaa Gyasi",
  },
  {
    quote:
      "You cannot stick a knife in a goat and then say, now I will remove my knife slowly - so let things be easy and clean; let there be no mess.There will always be blood.",
    author: "Chimamanda Ngozi Adichie",
  },
  {
    quote: "If the light is in your heart, you will find your way home.",
    author: "Rumi",
  },
  {
    quote:
      "Let yourself be drawn by the stronger pull of that which you truly love.",
    author: "Rumi",
  },
];
btn.addEventListener("click", function () {
  //randomise through the quotes array
  let random = Math.floor(Math.random() * quotes.length);

  //displays the quote and array in string format
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});

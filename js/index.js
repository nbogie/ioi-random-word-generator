"use strict";
//assumes that wordList.js will already have been loaded

const allWords = WORDLIST;

class Cycle {
  constructor(vals) {
    this.vals = vals;
    this.ix = 0;
  }

  current = () => this.vals[this.ix];

  next = () => {
    this.ix++;
    if (this.ix >= this.vals.length) {
      this.ix = 0;
    }
    return this.vals[this.ix];
  };

  random = () => pick(this.vals);
}

const bgColorsCycle = new Cycle([
  { value: "black" },
  { value: "#a57835", useOnlyDarkText: true },
  { value: "white" }
]);

const fontsCycle = new Cycle([
  "Acme",
  "Allerta Stencil",
  "Concert One",
  "Barrio",
  "Sedgwick Ave",
  "Sedgwick Ave Display",
  "Londrina Sketch",
  "Cabin Sketch",
  "Ranchers",
  "Codystar",
  "Ribeye"
]);

const wordsWithNoSpace = allWords.filter(w => !w.includes(" "));
const longWordsNoSpace = wordsWithNoSpace
  .sort((a, b) => b.length - a.length)
  .slice(0, 10);
const longWordsWithSpace = allWords
  .filter(w => w.includes(" "))
  .sort((a, b) => b.length - a.length)
  .slice(0, 10);

function pick(arr) {
  const ix = Math.floor(Math.random() * arr.length);
  return arr[ix];
}

function giantWordElement() {
  return document.getElementById("giantword");
}

function showInGiantWord(str) {
  const elem = giantWordElement();

  //  let colorStr = "#" + _.shuffle(["ff", "00", "aa"]).join("");

  let colorStr;

  if (bgColorsCycle.current().useOnlyDarkText) {
    colorStr = "#000000";
  } else {
    const hue = Math.round(Math.random() * 360);
    colorStr = `hsl(${hue}, 100%, 50%)`;
  }
  elem.style.color = colorStr;
  elem.innerText = str;
}

function showRandomWord() {
  showInGiantWord(pick(wordsWithNoSpace));
}

function showLongWordWithSpace() {
  showInGiantWord(pick(longWordsWithSpace));
}

function showLongWordNoSpace() {
  showInGiantWord(pick(longWordsNoSpace));
}

function cycleBackgroundColor() {
  const colorStr = bgColorsCycle.next().value;
  document.body.style.background = colorStr;
}

function setFont(fontName) {
  console.log(`font: ${fontName}`);
  document.body.style.fontFamily = fontName;
}

function cycleFont() {
  setFont(fontsCycle.next());
}

function randomiseFont() {
  setFont(fontsCycle.random());
}

function toggleTextRotation() {
  const elem = giantWordElement();
  elem.classList.toggle("rotated");
}

function handleKeypress(e) {
  console.log(`keypress: ${e.code}`);
  switch (e.code) {
    case "Digit1":
      cycleBackgroundColor();
      randomiseFont();
      showLongWordNoSpace();
      break;
    case "Digit2":
      showRandomWord();
      break;
    case "Digit3":
      toggleTextRotation();
      showRandomWord();
      break;
    default:
      showRandomWord();
  }
}

window.onload = function() {
  document.body.onkeydown = handleKeypress;
  cycleFont();
  cycleBackgroundColor();
  toggleTextRotation();

  showRandomWord();
};

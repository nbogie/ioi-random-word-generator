"use strict";
//assumes that wordList.js will already have been loaded

const allWords = WORDLIST;
const bgColors = [
  { value: "black" },
  { value: "#a57835", useOnlyDarkText: true },
  { value: "white" }
];
let bgColorIx = 0;
const allFonts = ["Acme", "Allerta Stencil", "Anton", "Concert One"];
let fontIx = 0;

const wordsWithNoSpace = WORDLIST.filter(w => !w.includes(" "));
const longWordsNoSpace = wordsWithNoSpace
  .sort((a, b) => b.length - a.length)
  .slice(0, 10);
const longWordsWithSpace = WORDLIST.filter(w => w.includes(" "))
  .sort((a, b) => b.length - a.length)
  .slice(0, 10);

function pick(arr) {
  const ix = Math.floor(Math.random() * arr.length);
  return arr[ix];
}

function cycleBackgroundColor() {
  bgColorIx++;
  if (bgColorIx >= bgColors.length) {
    bgColorIx = 0;
  }
  document.body.style.background = bgColors[bgColorIx].value;
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

function showInGiantWord(str) {
  const elem = document.getElementById("giantword");

  //  let colorStr = "#" + _.shuffle(["ff", "00", "aa"]).join("");

  let colorStr;
  if (bgColors[bgColorIx].useOnlyDarkText) {
    colorStr = "#000000";
  } else {
    const hue = Math.round(Math.random() * 255);
    colorStr = `hsl(${hue}, 100%, 50%)`;
  }
  elem.style.color = colorStr;

  elem.innerText = str;
}

function toggleTextRotation() {
  const elem = document.getElementById("giantword");
  elem.classList.toggle("rotated");
}
function randomiseFont() {
  document.body.style.fontFamily = pick(allFonts);
}

function cycleFont() {
  fontIx++;
  if (fontIx >= allFonts.length) {
    fontIx = 0;
  }
  document.body.style.fontFamily = allFonts[fontIx];
}

function handleKeypress(e) {
  console.log({ handlingKeypress: e.code });
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

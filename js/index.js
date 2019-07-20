"use strict";
//assumes that wordList.js will already have been loaded

const allWords = WORDLIST;

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

function showRandomWord() {
  showInGiantWord(pick(wordsWithNoSpace));
}
function showLongWordWithSpace() {
  showInGiantWord(pick(longWordsWithSpace));
}
function showLongWordNoSpace() {
  showInGiantWord(pick(longWordsNoSpace));
}
function setPageToBlack() {
  document.body.style.background = "black";
}
function setPageToWhite() {
  document.body.style.background = "white";
}

function showInGiantWord(str) {
  const elem = document.getElementById("giantword");
  const colorHex = _.shuffle(["ff", "00", "aa"]).join("");
  elem.style.color = "#" + colorHex;
  elem.innerText = str;
}

function toggleTextRotation() {
  const elem = document.getElementById("giantword");
  elem.classList.toggle("rotated");
}

showRandomWord();

document.body.onkeydown = handleKeypress;

function handleKeypress(e) {
  console.log({ handlingKeypress: e.code });
  switch (e.code) {
    case "Digit1":
      setPageToBlack();
      showLongWordNoSpace();
      break;
    case "Digit2":
      showRandomWord();
      break;
    case "Digit3":
      toggleTextRotation();
      setPageToWhite();
      showLongWordWithSpace();
      break;
    default:
      showRandomWord();
  }
}

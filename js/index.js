"use strict";
//assumes that wordList.js will already have been loaded

const allWords = WORDLIST;
const longWords = WORDLIST.sort((a, b) => b.length - a.length).slice(0, 10);

function pick(arr) {
  const ix = Math.floor(Math.random() * arr.length);
  return arr[ix];
}

function showRandomWord() {
  showInGiantWord(pick(allWords));
}
function showLongWord() {
  showInGiantWord(pick(longWords));
}

function showInGiantWord(str) {
  const elem = document.getElementById("giantword");
  const colorHex = _.shuffle(["ff", "00", "aa"]).join("");
  elem.style.color = "#" + colorHex;
  elem.innerText = str;
}

showRandomWord();

document.body.onkeydown = handleKeypress;

function handleKeypress(e) {
  console.log({ handlingKeypress: e.code });
  showLongWord();
}

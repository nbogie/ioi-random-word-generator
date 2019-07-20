"use strict";
//assumes that wordList.js will already have been loaded

function pick(arr) {
  const ix = Math.floor(Math.random() * arr.length);
  return arr[ix];
}

function showNewWord() {
  const elem = document.getElementById("giantword");
  const colorHex = _.shuffle(["ff", "00", "aa"]).join("");
  elem.style.color = "#" + colorHex;
  elem.innerText = pick(WORDLIST);
}

showNewWord();

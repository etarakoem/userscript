// ==UserScript==
// @name        Interactive Answers
// @namespace   Violentmonkey Scripts
// @match       https://gaia.cs.umass.edu/kurose_ross/interactive/*.php*
// @grant       none
// @version     1.0
// @author      Samuel Hua
// @description Display all answers of interactive
// ==/UserScript==
let header = document.querySelectorAll(".container")[0]
let btn = document.createElement("button")
btn.innerHTML = "Show all answers 🐧";
btn.onclick = function() {
  let ans = document.querySelectorAll('input[type="hidden"]')
  let response = document.querySelectorAll('input[type="text"]')
  $.each(ans, function(index, node) {
      response[index].value = node.value
  });
}

header.appendChild(btn)

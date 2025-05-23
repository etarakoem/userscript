// ==UserScript==
// @name         Copy Tip and Total
// @namespace    http://tampermonkey.net/
// @version      2025-05-22
// @description  try to take over the world!
// @author       You
// @match        https://www.clover.com/closeout/m/<id>/batches/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

let myDelay = 1000;
setTimeout( () => {
    console.log("hello")
    var header = document.querySelector(".h4");
    var btn = document.createElement("button")
    btn.innerHTML = "Copy total and tips";
    btn.onclick = function() {
    var total = document.querySelectorAll(".t-batch-totals-total")[0].innerText.slice(1)
    var tips = document.querySelectorAll(".t-batch-totals-total")[4].innerText.slice(1)

    navigator.clipboard.writeText(`${tips}\t${total}`).then(function() {
        alert(`Copy thành công: tips: ${tips}, total: ${total}. hãy đóng tab này`);
        }, function(err) {
        console.error('Async: Could not copy text: ', err);
        });
    }
    header.appendChild(btn);
}, myDelay);

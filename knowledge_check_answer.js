// ==UserScript==
// @name        Knowledge Check Answers
// @namespace   Violentmonkey Scripts
// @match       https://gaia.cs.umass.edu/kurose_ross/knowledgechecks/problem.php*
// @grant       none
// @version     1.0
// @author      Samuel Hua
// @description Display all correct answers in knowledgechecks
// ==/UserScript==
let header = document.querySelectorAll(".container")[0]
let btn = document.createElement("button")
btn.class = "btn btn-outline-success mt-n2 check-answer"
btn.innerHTML = "Samuel's magic: 🐧 Show all answers 🐧";
btn.onclick = function() {
  let type = document.querySelectorAll('form > input[type="hidden"]')
  $.each(type, function(i, question) {
    // multichoice
    if (question.value == "multichoice") {
    console.log("Finding multichoice")
    let ans = document.querySelectorAll('input[data-ans="1"]')
      $.each(ans, function(index, node) {
          node.checked = true;
      });
    }

    // Matching
    else if (question.value == "ddmatch") {
      let ans = document.querySelectorAll('select')
      $.each(ans, function(index, node) {
          let correct_ans = node.getAttribute("data-ans")
          console.log(correct_ans)
          $.each(node, function(index, answer){
            if (answer.value == correct_ans){
              answer.selected = true
            }
          })
      });
    }

    // Short answer
    else if (question.value == "shortanswer") {
      let forms = document.querySelectorAll("form > input[value='shortanswer']")
      $.each(forms, function(index, quest) {
        let form = quest.closest("form")
        let node = form.querySelectorAll('input[type="hidden"]')[1];
        console.log("Answer: "+node.value)
        let response = form.querySelector('input[type="text"]')
        response.value = node.value
      })
    }
    else {
        console.log("Not supported: "+type.value)
    }
  })
}

header.appendChild(btn)

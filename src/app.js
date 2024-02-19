/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function excuse() {
    let randomnumberWho = Math.floor(Math.random() * who.length);
    let randomnumberAction = Math.floor(Math.random() * action.length);
    let randomnumberWhat = Math.floor(Math.random() * what.length);
    let randomnumberWhen = Math.floor(Math.random() * when.length);
    return (
      who[randomnumberWho] +
      " " +
      action[randomnumberAction] +
      " " +
      what[randomnumberWhat] +
      " " +
      when[randomnumberWhen]
    );
  }
  document.querySelector("#excuse").innerHTML = excuse();
};

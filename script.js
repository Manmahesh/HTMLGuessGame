"use strict";

const repeat = function () {
  score--;
  document.querySelector(".score").textContent = String(score);
};

const repeat1 = function () {
  displayMessage("🚨 Please be inside the range !!");
  score--;
  document.querySelector(".score").textContent = String(score);
};

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const secret_number = Math.trunc(Math.random() * 20 + 1);
let score = Number(document.querySelector(".score").textContent);
let highscore = Number(document.querySelector(".highscore").textContent);

console.log(secret_number);
document.querySelector(".check-button").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When thers is no input
  if (!guess) {
    displayMessage("🚨 No Number!");
  } else if (guess > 20 || guess < 0) {
    displayMessage("🚨 Please be inside the range!");
  }

  //When number is greater
  if (guess > secret_number) {
    if (guess >= 20) repeat1();
    else if (score > 1) {
      repeat();
      displayMessage("📢Number is high");
    } else {
      displayMessage("🤣🤣 YOU LOOSE");
    }

    //When number is equal
  } else if (guess === secret_number) {
    document.querySelector(".box").textContent = String(guess);
    if (score > highscore) {
      document.querySelector(".highscore").textContent = String(score);
      displayMessage("🎉Winner Winner Chicken Dinner");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".box").style.width = "20rem";
    }

    //When number is less than
  } else if (guess < secret_number) {
    if (guess <= 0) repeat1();
    else if (score > 1) {
      //   score--;
      //   document.querySelector(".score").textContent = String(score);
      displayMessage("📢Number is low");
      repeat();
    } else {
      displayMessage("🤣🤣 YOU LOOSE");
    }
  }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value;
  document.querySelector(".box").style.width = "10rem";
  document.querySelector(".box").textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".score").textContent = score;
  secret_number = Math.trunc(Math.random() * 20 + 1);
});

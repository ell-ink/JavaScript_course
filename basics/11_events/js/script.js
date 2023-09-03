"use strict";

// Events

const btn = document.querySelectorAll("button"),
      overlay = document.querySelector(".overlay");

// let i = 0;

const showTarget = (event) => {
    console.log(event.target);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn[3].removeEventListener("click", showTarget);
    // }
};

btn[1].onclick = function() {
    alert("Second click");
};

btn[2].addEventListener("click", () => {
    alert("Third click");
});

btn[2].addEventListener("mouseenter", (event) => {
    console.log(event.currentTarget);
    event.target.remove();
});

btn[4].addEventListener("click", showTarget);
overlay.addEventListener("click", showTarget);

const link = document.querySelector("a");

link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
});
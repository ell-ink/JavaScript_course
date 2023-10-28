"use strict";

// Work with Elements

const box = document.getElementById("box");
console.log(box);

const buttons = document.getElementsByTagName("button");
console.log(buttons); // pseudo-array
console.log(buttons[1]);

const btn2 = document.getElementsByTagName("button")[2];
console.log(btn2); 

const circle = document.getElementsByClassName("circle");
console.log(circle); 

const hearts = document.querySelectorAll(".heart");
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector(".heart");
console.log(oneHeart);

console.dir(box);

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue";

buttons[1].style.borderRadius = "100%";
circle[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
// const text = document.createTextNode("Hello");

div.classList.add("black");

// document.body.append(div);
// document.querySelector(".wrapper").append(div);

const wrapper = document.querySelector(".wrapper");

wrapper.prepend(div);
// wrapper.appendChild(div);

// hearts[1].before(div);
// hearts[1].after(div);
// wrapper.insertBefore(div, hearts[1]);

circle[0].remove();
// wrapper.removeChild(hearts[1]);


hearts[0].replaceWith(circle[0]);
// wrapper.replaceChild(circle[0], hearts[0]);

div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello";

div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
div.insertAdjacentHTML("afterbegin", "<h2>world</h2>");
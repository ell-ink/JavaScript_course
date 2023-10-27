'use strict';

const block = document.querySelector('.block');
const userData = {
    name: "Elina",
    age: null,
    say: function() {
        console.log("Hello");
    }
};

console.log(block); // null

console.log(block?.textContent); // undefined

if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}

console.log(userData.skills?.js);

userData.say();
userData.hey?.(); // nothing
userData.hey(); // error

console.log(userData.skills.js); // error

block.textContent = "123"; // error

console.log(block.textContent); // error
console.log(1+2); // doesn't work
"use strict";

// Object-oriented programming

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// // john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);

console.log(john);
console.log(john.armor);
john.sayHello();

// Dynamic typing

// To String

// console.log(typeof(String(4)));
console.log(typeof(4 + ""));

const num = 4;
console.log("https://vk.com/category/" + num);

const fontSize = 26 + "px";
console.log(fontSize);

// To Number

// console.log(typeof(Number("4")));
console.log(typeof(+"4px"));
console.log(typeof(parseInt("15px", 10)));

let yourAns = +prompt("Hello", "");
console.log(yourAns);

// To Boolean
// Always false: 0, "", null, undefined, NaN

let switcher = null;

if (switcher) {
    console.log("Working...");
}

switcher = 1;

if (switcher) {
    console.log("Working...");
}

// console.log(typeof(Boolean("4")));
console.log(typeof(!!"4"));

// Lexical Environment and Closure

let myNum = 5; 

function outputNum() {
    let myNum = 4;
    console.log(myNum);
}

myNum = 6;

outputNum(); 
console.log(myNum);

function createCounter() {
    let myCounter = 0;

    const myFunction = function() {
        myCounter = myCounter + 1;
        return myCounter;
    }
    return myFunction;
}


const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);
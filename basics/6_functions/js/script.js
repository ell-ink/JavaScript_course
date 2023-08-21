"use strict";

// Funtcions

let messageNum2 = 10; // global varible

function showFirstMessage(text) {  // function declaration
    console.log(`Your text: ${text}`);
    let messageNum = 20; // local varible
    messageNum2 = messageNum2 + messageNum;
}

showFirstMessage("Hello World!");
console.log(messageNum2);

console.log(calc(5, 10));
console.log(calc(2, 7));
console.log(calc(2000, 3));

function calc(a, b) {
    return(a + b);
}

function ret() {
    let num = 13;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() { // function expression
    console.log("Hello!");
}; 
logger();

// const arrowCalc = (a, b) => {return a + b}; // arrow function

const usdCurr = 20;
const eurCurr = 30;
const discount = 0.9;

function convert(amount, curr) {
    console.log(curr * amount);
}

function convert2(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
    return function(){}
}

const resCurr = convert2(500, usdCurr);
promotion(convert2(500, usdCurr));
promotion(resCurr);


convert(500, usdCurr);
convert(500, eurCurr);

function test() {
    for (let i = 0; i < 5; i++){
        console.log(i);
        if (i == 3) return;
    }
    console.log("Done")
}

test();

function doNothing() {}
console.log(doNothing() === undefined);

function first() { // callback function
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function done() {
    console.log("Lesson is complited")
}

function learnJs(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}

learnJs("JavaScript", function() {
    console.log("I finished this lesson");
});

learnJs("Java", done);
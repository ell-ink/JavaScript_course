"use strict";

// Varibles 

let number = 4.6;
let number2 = 5;
const leftBorderWidth = 1;

console.log(number); 
console.log(number2); 
console.log(leftBorderWidth); 

const arrObj = {
    a: 'a',
    1: 'b'
}

arrObj.b = '1234';
arrObj['b'] = '1234';

console.log(arrObj.a);
console.log(arrObj[1]);
console.log(arrObj['b']);
console.log(arrObj.b);

number2 = 10;
console.log(number2); 

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

// Console.log and alert

alert('hello');

const res = confirm('Are you here?');
console.log(res)

const ans = +prompt('How old are you?', '18'); // dynamic typing
console.log(typeof(ans))

const ans2 = [];

ans2[0] = prompt('Name:', 'John');
ans2[1] = prompt('Surname:', 'Watson');
ans2[2] = +prompt('Age:', '40');

document.write(ans2);

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';
alert(`Hello, ${user}`)

// Operators

// arithmetic
console.log('arr' + '- object');
console.log(4 + +'5');

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

++incr;
--decr;

console.log(incr);
console.log(decr);

console.log(++incr);
console.log(--decr);

console.log(5%2);

// comparison
console.log(2*4 == 8);
console.log(2*4 === '8');

// logical
const isChecked = true,
      isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked && !isClose);

// Conditional Statments

if (number2 == 9){
    console.log('ok');
} else {
    console.log('error');
}

const numIf = 50;

if (numIf < 49){
    console.log('Error');
} else if(numIf > 100){
    console.log('Too much');
}else {
    console.log('Ok');
}

(numIf === 50) ? console.log('Ok') : console.log('Error'); // ternary operator


switch (numIf) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 50:
        console.log('Correct');
        break;
    default:
        console.log('No condition');      
}

// Loops

let numWhile = 50;

while(numWhile < 55){
    console.log(numWhile);
    numWhile++;
}

do {
    console.log(numWhile);
    numWhile++;
}
while (numWhile < 55);

for(let i = 1; i < 8; i++){
    if (i ==6){
        continue;
    }
    console.log(i);
}

for(let i = 0; i < 3; i++){
    console.log(i);
    for(let j = 0; j < 3; j++){
        console.log(j);
    }
}

let star = "*";

for(let i = 0; i < 6; i++){
    console.log(star);
    star+= "*";
}

first: for(let i = 0; i < 3; i++){
    console.log(`First level: ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`Second level: ${j}`);
        for(let k = 0; k < 3; k++){
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}

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

// String and number Methods

const methodStr = "teST";
const methodArr = [1, 2, 3];

console.log(methodStr.length);
console.log(methodArr.length);

console.log(methodStr[2]);

console.log(methodStr.toUpperCase());
console.log(methodStr.toLowerCase());

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));

const logg = "Hello world";

console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const methodNum = 12.2;
console.log(Math.round(methodNum));

const methodTest = "12.2px";
console.log(parseInt(methodTest));
console.log(parseFloat(methodTest));

const methodTrim = " Hello worl  " + "d";
console.log(methodTrim.trim());
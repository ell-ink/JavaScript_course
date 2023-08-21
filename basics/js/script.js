// "use strict";

// // Varibles 

// let number = 4.6;
// let number2 = 5;
// const leftBorderWidth = 1;

// console.log(number); 
// console.log(number2); 
// console.log(leftBorderWidth); 

// const arrObj = {
//     a: 'a',
//     1: 'b'
// }

// arrObj.b = '1234';
// arrObj['b'] = '1234';

// console.log(arrObj.a);
// console.log(arrObj[1]);
// console.log(arrObj['b']);
// console.log(arrObj.b);

// number2 = 10;
// console.log(number2); 

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// // Console.log and alert

// alert('hello');

// const res = confirm('Are you here?');
// console.log(res)

// const ans = +prompt('How old are you?', '18'); // dynamic typing
// console.log(typeof(ans))

// const ans2 = [];

// ans2[0] = prompt('Name:', 'John');
// ans2[1] = prompt('Surname:', 'Watson');
// ans2[2] = +prompt('Age:', '40');

// document.write(ans2);

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';
// alert(`Hello, ${user}`)

// // Operators

// // arithmetic
// console.log('arr' + '- object');
// console.log(4 + +'5');

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// ++incr;
// --decr;

// console.log(incr);
// console.log(decr);

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// // comparison
// console.log(2*4 == 8);
// console.log(2*4 === '8');

// // logical
// const isChecked = true,
//       isClose = false;

// console.log(isChecked && isClose);
// console.log(isChecked || isClose);
// console.log(isChecked && !isClose);

// // Conditional Statments

// if (number2 == 9){
//     console.log('ok');
// } else {
//     console.log('error');
// }

// const numIf = 50;

// if (numIf < 49){
//     console.log('Error');
// } else if(numIf > 100){
//     console.log('Too much');
// }else {
//     console.log('Ok');
// }

// (numIf === 50) ? console.log('Ok') : console.log('Error'); // ternary operator


// switch (numIf) {
//     case 49:
//         console.log('Error');
//         break;
//     case 100:
//         console.log('Error');
//         break;
//     case 50:
//         console.log('Correct');
//         break;
//     default:
//         console.log('No condition');      
// }

// // Loops

// let numWhile = 50;

// while(numWhile < 55){
//     console.log(numWhile);
//     numWhile++;
// }

// do {
//     console.log(numWhile);
//     numWhile++;
// }
// while (numWhile < 55);

// for(let i = 1; i < 8; i++){
//     if (i ==6){
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 0; i < 3; i++){
//     console.log(i);
//     for(let j = 0; j < 3; j++){
//         console.log(j);
//     }
// }

// let star = "*";

// for(let i = 0; i < 6; i++){
//     console.log(star);
//     star+= "*";
// }

// first: for(let i = 0; i < 3; i++){
//     console.log(`First level: ${i}`);
//     for(let j = 0; j < 3; j++){
//         console.log(`Second level: ${j}`);
//         for(let k = 0; k < 3; k++){
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// // Funtcions

// let messageNum2 = 10; // global varible

// function showFirstMessage(text) {  // function declaration
//     console.log(`Your text: ${text}`);
//     let messageNum = 20; // local varible
//     messageNum2 = messageNum2 + messageNum;
// }

// showFirstMessage("Hello World!");
// console.log(messageNum2);

// console.log(calc(5, 10));
// console.log(calc(2, 7));
// console.log(calc(2000, 3));

// function calc(a, b) {
//     return(a + b);
// }

// function ret() {
//     let num = 13;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() { // function expression
//     console.log("Hello!");
// }; 
// logger();

// // const arrowCalc = (a, b) => {return a + b}; // arrow function

// const usdCurr = 20;
// const eurCurr = 30;
// const discount = 0.9;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// function convert2(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
//     return function(){}
// }

// const resCurr = convert2(500, usdCurr);
// promotion(convert2(500, usdCurr));
// promotion(resCurr);


// convert(500, usdCurr);
// convert(500, eurCurr);

// function test() {
//     for (let i = 0; i < 5; i++){
//         console.log(i);
//         if (i == 3) return;
//     }
//     console.log("Done")
// }

// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

// function first() { // callback function
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function done() {
//     console.log("Lesson is complited")
// }

// function learnJs(lang, callback) {
//     console.log(`I learn ${lang}`);
//     callback();
// }

// learnJs("JavaScript", function() {
//     console.log("I finished this lesson");
// });

// learnJs("Java", done);

// // String and number Methods

// const methodStr = "teST";
// const methodArr = [1, 2, 3];

// console.log(methodStr.length);
// console.log(methodArr.length);

// console.log(methodStr[2]);

// console.log(methodStr.toUpperCase());
// console.log(methodStr.toLowerCase());

// let fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));
// console.log(fruit.indexOf("q"));

// const logg = "Hello world";

// console.log(logg.slice(6, 11));
// console.log(logg.slice(6));
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const methodNum = 12.2;
// console.log(Math.round(methodNum));

// const methodTest = "12.2px";
// console.log(parseInt(methodTest));
// console.log(parseFloat(methodTest));

// const methodTrim = " Hello worl  " + "d";
// console.log(methodTrim.trim());

// // Objects Methods

// // const obj = new Object();

// const options = {
//         name: "test",
//         width: 1024,
//         height: 1024,
//         colors: {
//             border: "black",
//             bg: "red"
//         },
//         makeTest: function() {
//             console.log("Test");
//         }
//     };

// console.log(options.name);
// options.makeTest();

// const {border, bg} = options.colors;

// console.log({border});
// console.log({bg});

// console.log(Object.keys(options).length);

// delete options.name;

// console.log(options);

// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Attribute ${key} has value ${i}`);
//             console.log(`Attribute ${i} has value ${options[key][i]}`);   
//         }
//     } else {
//         console.log(`Attribute ${key} has value ${options[key]}`);
//     }
// }

// // Arrays Methods

// const arr = [2, 1, 6, 8, 3];

// arr.pop();
// arr.push(10);

// console.log(arr);
// console.log(arr.length);

// function compareNum(a, b) {
//     return a - b;
// }

// arr.sort(compareNum);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// } 

// arr.forEach(function(item, i, arr)  {
//     console.log(`${i}: ${item} is a value of array ${arr}`);
// });

// const arrStr = "toys, flowers, kittens";
// const products = arrStr.split(", ");
// products.sort();
// console.log(products);
// console.log(products.join(" "));


// // Varibles copies

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const exampleObj = {
//     a: 5,
//     b: 1,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const copy = exampleObj;
// copy.a = 10;

// console.log(copy);
// console.log(exampleObj);

// function copyObject(mainObj) {
//     let objCopy = {};
//     let key;

//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
  
// const newNumbers = copyObject(exampleObj);
// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(exampleObj);

// const add = {
//     d: 17, 
//     e: 20
// };

// console.log(Object.assign(newNumbers, add));
// console.log(Object.assign({}, add));

// const oldArr = ["a", "b", "c"];
// const newArr = oldArr.slice();

// newArr[1] = "qwerty";
// console.log(newArr);
// console.log(oldArr);

// const video = ["youtube", "vimeo", "rutube"],
//       blogs = ["wordpress", "livejornal", "blogger"],
//       internet = [...video, ...blogs, "vk", "facebook"];

// console.log(internet);

// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const numArr = [2, 5, 7];
// log(...numArr);

// const newArray = ["a", "b"];
// const copiedArr = [...newArray];
// console.log(copiedArr);

// const q = {
//     one: 1,
//     two: 2
// };

// const newQ = {...q};
// console.log(newQ);


// // Object-oriented programming

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const john = Object.create(soldier);

// // const john = {
// //     health: 100
// // };

// // // john.__proto__ = soldier;
// // Object.setPrototypeOf(john, soldier);

// console.log(john);
// console.log(john.armor);
// john.sayHello();

// // Dynamic typing

// // To String

// // console.log(typeof(String(4)));
// console.log(typeof(4 + ""));

// const num = 4;
// console.log("https://vk.com/category/" + num);

// const fontSize = 26 + "px";
// console.log(fontSize);

// // To Number

// // console.log(typeof(Number("4")));
// console.log(typeof(+"4px"));
// console.log(typeof(parseInt("15px", 10)));

// let yourAns = +prompt("Hello", "");
// console.log(yourAns);

// // To Boolean
// // Always false: 0, "", null, undefined, NaN

// let switcher = null;

// if (switcher) {
//     console.log("Working...");
// }

// switcher = 1;

// if (switcher) {
//     console.log("Working...");
// }

// // console.log(typeof(Boolean("4")));
// console.log(typeof(!!"4"));

// // Lexical Environment and Closure

// let myNum = 5; 

// function outputNum() {
//     let myNum = 4;
//     console.log(myNum);
// }

// myNum = 6;

// outputNum(); 
// console.log(myNum);

// function createCounter() {
//     let myCounter = 0;

//     const myFunction = function() {
//         myCounter = myCounter + 1;
//         return myCounter;
//     }
//     return myFunction;
// }


// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

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

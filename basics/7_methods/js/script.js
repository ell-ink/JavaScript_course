"use strict";

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

// Objects Methods

// const obj = new Object();

const options = {
        name: "test",
        width: 1024,
        height: 1024,
        colors: {
            border: "black",
            bg: "red"
        },
        makeTest: function() {
            console.log("Test");
        }
    };

console.log(options.name);
options.makeTest();

const {border, bg} = options.colors;

console.log({border});
console.log({bg});

console.log(Object.keys(options).length);

delete options.name;

console.log(options);

for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Attribute ${key} has value ${i}`);
            console.log(`Attribute ${i} has value ${options[key][i]}`);   
        }
    } else {
        console.log(`Attribute ${key} has value ${options[key]}`);
    }
}

// Arrays Methods

const arr = [2, 1, 6, 8, 3];

arr.pop();
arr.push(10);

console.log(arr);
console.log(arr.length);

function compareNum(a, b) {
    return a - b;
}

arr.sort(compareNum);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
} 

arr.forEach(function(item, i, arr)  {
    console.log(`${i}: ${item} is a value of array ${arr}`);
});

const arrStr = "toys, flowers, kittens";
const products = arrStr.split(", ");
products.sort();
console.log(products);
console.log(products.join(" "));
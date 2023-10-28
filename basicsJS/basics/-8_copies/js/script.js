"use strict";

// Varibles copies

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const exampleObj = {
    a: 5,
    b: 1,
    c: {
        x: 7,
        y: 4
    }
};

const copy = exampleObj;
copy.a = 10;

console.log(copy);
console.log(exampleObj);

function copyObject(mainObj) {
    let objCopy = {};
    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
  
const newNumbers = copyObject(exampleObj);
newNumbers.a = 10;
console.log(newNumbers);
console.log(exampleObj);

const add = {
    d: 17, 
    e: 20
};

console.log(Object.assign(newNumbers, add));
console.log(Object.assign({}, add));

const oldArr = ["a", "b", "c"];
const newArr = oldArr.slice();

newArr[1] = "qwerty";
console.log(newArr);
console.log(oldArr);

const video = ["youtube", "vimeo", "rutube"],
      blogs = ["wordpress", "livejornal", "blogger"],
      internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const numArr = [2, 5, 7];
log(...numArr);

const newArray = ["a", "b"];
const copiedArr = [...newArray];
console.log(copiedArr);

const q = {
    one: 1,
    two: 2
};

const newQ = {...q};
console.log(newQ);
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
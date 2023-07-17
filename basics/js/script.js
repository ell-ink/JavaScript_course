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
"use strict";

// Типы перменных

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

// Вывод на станицу и alert

alert('hello');

const res = confirm('Are you here?');
console.log(res)

const ans = +prompt('Вам есть 18?', '18'); // динамическая типизация
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

// Логически операции

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

console.log(2*4 == 8);
console.log(2*4 === '8');

const isChecked = true,
      isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked && !isClose);


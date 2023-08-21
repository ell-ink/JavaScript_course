"use strict";

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
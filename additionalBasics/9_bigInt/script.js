"use strict";

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

const bigInt = 1n;

const sameBigInt = BigInt("1111111111111111111111111111111111111111111111111111111");

console.log(typeof(bigInt)); // bigint

// console.log(5n + 1); // error
// console.log(Math.round(5n)); // error
console.log(1n + BigInt(2)); // 3n

// console.log(+(1n + BigInt(2))); // error
console.log(Number(1n + BigInt(2))); // 3

console.log(5n + 1n); // 6n

console.log(5n / 2n); // 2n, округленный результат

console.log(2n > 1n); // true
console.log(2n < 1); // false

console.log(2n == 2); // true
console.log(2n === 2); // false

console.log(Number(sameBigInt)); // 1.1111111111111112e+54
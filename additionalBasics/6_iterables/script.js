"use strict";

const user = {
    name: "Elina",
    surname: "Soboleva",
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

for (const key in user) {
    console.log(user[key]); // Elina Soboleva ƒ(){...}
}

// for (const key of user) {
//     console.log(user[key]);  // user is not iterable
// }

const arr = ["a", "b", "c"]

for (const key in arr) {
    console.log(arr[key]); // a b c
}

for (const key of arr) {
    console.log(arr[key]); // undefined x3
}

for (const key of arr) {
    console.log(key); // a b c
}

const str = "string";

for (const key in str) {
    console.log(str[key]); // s t r i n g
}

console.dir(arr); // Symbol(Symbol.iterator): ƒ values()

Array.prototype.someMethod = function() {};

for (const key in arr) {
    console.log(key); // 0 1 2 someMethod
}

for (const key of arr) {
    console.log(key); // a b c
}

const salaries = {
    Elina: 500,
    Alex: 5000,
    John: 600, 
    sayHello: function() {
        console.log("Hello");
    }
}

salaries[Symbol.iterator] = function() {
    return {
        current: this.Elina,
        last: this.Alex,
    
        next() {  
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current}
            } else {
                return {done:true}
            }
        }
    }
}

for(let res of salaries) {
    console.log(res); // 1000 1500 ... 5000
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next()); // {done: false, value: 1000}
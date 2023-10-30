"use strict";

const obj = {
    "name": "Test"
}

let id = Symbol("id");
let id2 = Symbol("id"); // символы могут идеть одинаковое описание

console.log(id == id2); // символы - всегда уникальные сущности

obj[id] = 1;

console.log(obj[id]);
console.log(obj);



const obj2 = {
    "name": "Test",
    [Symbol("id")] : 1
}

console.log(obj2);
console.log(obj2["id"]); // undefined

for (let value in obj2) console.log(value); // name



let id3 = Symbol("id");

const obj3 = {
    "name": "Test",
    [id3] : 1,
    getId: function() {
        return this[id3];
    }
}

console.log(obj3.getId()); // 1

console.log(Object.getOwnPropertySymbols(obj3)); // [ Symbol(id) ]
console.log(obj3[Object.getOwnPropertySymbols(obj3)[0]]); // 1


const myAwfulDB = {
    movies: [],
    actors: [],
    id: 123
}

// Cторонний код библиотеки

myAwfulDB.id = "2345432";

console.log(myAwfulDB["id"]); // 2345432

const myAwersomeDB = {
    movies: [],
    actors: [],
    [Symbol("id")] : 123
}

myAwersomeDB.id = "2345432";

console.log(myAwersomeDB); // { movies: [], actors: [], id: '2345432', [Symbol(id)]: 123 }

const myGlobalDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")] : 123 // глобальный реестр символов
}

console.log(myGlobalDB[Symbol.for("id")]);
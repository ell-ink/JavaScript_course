"use strict";

// Флаги

const user = {
    name: "Elina",
    surname: "Soboleva",
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

// writable – если true, свойство можно изменить, иначе оно только для чтения
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя


Object.defineProperty(user, "birthdate", {value: prompt("Date"), writable: false}); // configurable: false enumerable: false

console.log(Object.getOwnPropertyDescriptor(user, "birthdate"));
// user.birthdate = "18/12/2003"; // error

Object.defineProperty(user, "gender", {value: "female"});
console.log(Object.getOwnPropertyDescriptor(user, "gender"));

for (let key in user) console.log(key); // name, surname, showMyPublicData

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
})


// Полезные методы объектов

console.log(Object.keys(user)); // массив ключей
console.log(Object.values(user)); // массив значений
console.log(Object.entries(user)); // массив массивов пар ключей и значений

'use strict';

const boxesQuery = document.querySelectorAll(".box");
const boxesGet = document.getElementsByClassName("box");

boxesQuery[0].remove(); // псевдомассив с 3 элементами, статичная коллекция
boxesGet[0].remove(); // псевдомассив с 2 элементами

console.log(boxesQuery); // NodeList(3), статичная коллекция 3 элемента
console.log(boxesGet); // HTMLCollection(3), живая коллекция 1 элемент
console.log(document.body.children); // HTMLCollection(4)

for(let i=0; i < 5; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    document.body.append(div);
    // boxesGet[boxesGet.length] = div; // ошибка
}

console.log(boxesQuery); // NodeList(3), статичная коллекция 3 элемента
console.log(boxesGet); // HTMLCollection(3), живая коллекция 6 элементов
console.log(Array.from(boxesGet)); // обычный массив, не следит за DOM-деревом


boxesQuery.forEach(box => {
    if (box.matches(".this")) console.log("This one");
})

console.log(boxesQuery[2].closest(".wrapper"));
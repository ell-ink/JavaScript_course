"use strict";

// touchstart - при касании к элементу
// touchmove - движение при касании к элементу
// touchend - при прекращении касания
// touchenter - при наведении на элемент
// touchleave - при отведении от элемента
// touchcancel - при выходе касания за пределы браузера


// Свойства
// touches - список пальчев, взаимодействующих с экраном
// targetTouches - список пальчев, взаимодействующих с конкретным элементом
// changedTouches - список пальчев, которые участвуют в текущем событии

//hammer.js

window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    box.addEventListener("touchstart", (e) => {
        e.preventDefault();

        console.log("Start");
        console.log(e.touches);
        console.log(e.targetTouches);
        console.log(e.changedTouches);
    });

    box.addEventListener("touchmove", (e) => {
        e.preventDefault();

        console.log("Move");
        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener("touchend", (e) => {
        e.preventDefault();

        console.log("End");
    });
});

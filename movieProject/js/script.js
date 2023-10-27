/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const flowersDB = {
    flowers: [
        "Лилия",
        "Роза",
        "Лаванда",
        "Гербера",
        "Пион"
    ]
};

const promoAdvImg = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      promoGenre = poster.querySelector(".promo__genre"),
      fowersList = document.querySelector(".promo__interactive-list");


promoAdvImg.forEach(item => {
    item.remove();
});

promoGenre.textContent = "цветы";

poster.style.backgroundImage = "url('img/bg.png')";

fowersList.innerHTML = "";

flowersDB.flowers.sort();

flowersDB.flowers.forEach((movie, i) => {
    fowersList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${movie}
        <div class="delete"></div>
    </li>
    `;
});
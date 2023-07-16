"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const watchedMovie = prompt('Один из последних просмотренных фильмов?', '1+1'),
      movieRating = prompt('На сколько оцените его?', '10');

personalMovieDB.movies[watchedMovie] = movieRating;

console.log(personalMovieDB);
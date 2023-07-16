"use strict";

const numberOfFilms = +prompt("How many films have you watched recently?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const watchedMovie = prompt("Name the last film you've watched.", "1+1"),
      movieRating = prompt("Rate it, please.", "10");

personalMovieDB.movies[watchedMovie] = movieRating;

console.log(personalMovieDB);

